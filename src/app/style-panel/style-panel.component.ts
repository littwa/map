import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/index';
import { StyleServices } from '../shared/style.services';
import { getStyle } from '../core/store/index';
import { ChangeStyleAction } from '../core/store/styles-fields/styleFields.actions';
import { valueDefault } from '../shared/value.sheets';

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.css'],
})
export class StylePanelComponent implements AfterViewInit {
  panelOpenState = false;
  fieldsIsRenered: string[];
  constructor(private store: Store, private StyleServices: StyleServices) {}
  arrStyleEntreis: any = [];

  changeProperty(e, nameInput) {
    console.log('form-event', e.path[1]);

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
          console.log(55);
        }
      });

      if (nameInput.split('-')[0] === 'select') {
        currentValue.select = arrForSelect;
      }

      // currentValue.select

      console.log(data);

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
      console.log(22, this.arrStyleEntreis);
    }
  }

  ngAfterViewInit() {
    this.store.select(getStyle).subscribe((v) => {
      this.arrStyleEntreis = v;
    });
  }
}
