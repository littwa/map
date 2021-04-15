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

  changeProperty(e, nameInput) {
    if (e.path[1]) {
      const data = {};
      let currentValue: any = { ...valueDefault };

      let formData = new FormData(e.path[1]);

      let arrForSelect = [];

      formData.forEach((value, name) => {
        if (
          name !== 'placeholder' &&
          name !== 'required' &&
          name !== 'selectvalue' &&
          name !== 'selectname'
        ) {
          data[name] = value;
        }
        if (name === 'placeholder' || name === 'required') {
          currentValue[name] = value;
        }
        if (name === 'selectvalue' || name === 'selectname') {
          arrForSelect.push(value);
          // console.log(55);
        }
      });

      if (nameInput.split('-')[0] === 'select') {
        currentValue.select = arrForSelect;
      }

      this.store.dispatch(
        new ChangeStyleAction({ data, nameInput, currentValue })
      );
    }
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
