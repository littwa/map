import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StyleServices {
  allStyle = {
    button: null,
    input: null,
    textarea: null,
    select: null,
    checkbox: null,
  };

  ent = [];

  addStyleBtn(styleItem) {
    this.allStyle.button = styleItem;
    let entMiddl = Object.entries(this.allStyle);
    this.ent[0] = entMiddl;
    // this.ent = entMiddl; not work???
  }
  addStyleCheckbox(styleItem) {
    this.allStyle.checkbox = styleItem;
    let entMiddl = Object.entries(this.allStyle);
    this.ent[0] = entMiddl;
  }

  addStyleInput(styleItem) {
    this.allStyle.input = styleItem;
    let entMiddl = Object.entries(this.allStyle);
    this.ent[0] = entMiddl;
  }

  addStyleSelect(styleItem) {
    this.allStyle.select = styleItem;
    let entMiddl = Object.entries(this.allStyle);
    this.ent[0] = entMiddl;
  }
  addStyleTextarea(styleItem) {
    this.allStyle.textarea = styleItem;
    let entMiddl = Object.entries(this.allStyle);
    this.ent[0] = entMiddl;
  }

  getAllStyles() {
    return of(this.ent);
  }
}
