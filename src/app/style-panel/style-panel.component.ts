import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFields, getGeneralStyle } from '../core/store/index';
import { StyleServices } from '../shared/style.services';
import { getStyle } from '../core/store/index';
import {
  ChangeStyleAction,
  RemoveStyleAction,
} from '../core/store/styles-fields/styleFields.actions';
import { ChangeStyleGeneralAction } from '../core/store/styles-general/general-style.actions';
import { valueDefault } from '../shared/value.sheets';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

enum Attribute {
  Placeholder = 'placeholder',
  Required = 'required',
  SelectValue = 'selectvalue',
  SelectName = 'selectname'
}

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.scss'],
})
export class StylePanelComponent implements AfterViewInit {
  panelOpenState = false;
  fieldsIsRenered: string[];
  constructor(private store: Store, private StyleServices: StyleServices) {}
  arrStyleEntreis: any = [];
  generalStyle: any;
  subGenStyle;
  subStyle;

  formGeneralStyle: FormGroup;
  submitFormGeneralStyle(): void {

    this.store.dispatch(
      new ChangeStyleGeneralAction(this.formGeneralStyle.value)
    );

  }

  ngOnInit() {
    this.subGenStyle = this.store.select(getGeneralStyle).subscribe((v) => {
      this.generalStyle = v;
    });

    const {
      stylesGeneral: { backgroundColor, height, width, border },
      stylesGeneralInner: { backgroundColor: backgroundColorInner },
    } = this.generalStyle;

    this.formGeneralStyle = new FormGroup({
      stylesGeneral: new FormGroup({
        backgroundColor: new FormControl(backgroundColor),
        height: new FormControl(height),
        width: new FormControl(width),
        border: new FormControl(border),
      }),
      stylesGeneralInner: new FormGroup({
        backgroundColor: new FormControl(backgroundColorInner),
      }),
    });
  }


  delProperty(e, prop) {

    this.store.dispatch(new RemoveStyleAction(prop));
  }

  changeProperty(e, nameInput, formElement) {
    const data: object = {};
    let currentValue: any = { ...valueDefault };
    let formData = new FormData(formElement);
    let arrForSelect: Array<any> = [];

      formData.forEach((value, name) => {
        switch (name) {
          case Attribute.Required:
          case Attribute.Placeholder:
            currentValue[name] = value;
            return
          case Attribute.SelectValue:
          case Attribute.SelectName:
            arrForSelect.push(value);
            currentValue.select = arrForSelect;
            return
          default:
            data[name] = value;
        }
      });

      this.store.dispatch(
        new ChangeStyleAction({ data, nameInput, currentValue })
      );

  }

  @ViewChildren('formnative') formnative;

  objectEntriesStyles(v) {
    return Object.entries(v);
  }

  ngDoCheck() {
    if (this.arrStyleEntreis.length > 0) {

    }
  }

  ngAfterViewInit() {
    this.subStyle = this.store.select(getStyle).subscribe((v) => {
      this.arrStyleEntreis = v;
    });


  }
  ngOnDestroy() {
    this.subGenStyle.unsubscribe()
    this.subStyle.unsubscribe()
  }

}
