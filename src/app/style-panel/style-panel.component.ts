import {
  Component,
  OnInit,
  AfterViewInit,
  DoCheck,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/index';
import { StyleServices } from '../shared/style.services';
import { getStyle } from '../core/store/index';
import { ChangeStyleAction } from '../core/store/styles-fields/styleFields.actions';

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
    console.log('form-changeProperty', e);
    console.log('name', nameInput);
    if (this.formnative) {
      console.log(55555555, this.formnative.nativeElement.dataset.nameinput);

      // console.log(242424242, this.formnative.nativeElement);

      const data = {};
      let formData = new FormData(this.formnative.nativeElement);
      // console.log('ff', formData);

      formData.forEach((value, name) => {
        data[name] = value;
      });

      // console.log(data);

      this.store.dispatch(new ChangeStyleAction({ data, nameInput }));
    }
  }
  @ViewChild('formnative') formnative;
  //form: NgForm
  objectEntriesStyles(v) {
    return Object.entries(v);
  }

  ngDoCheck() {
    if (this.arrStyleEntreis.length > 0) {
      console.log(22, this.arrStyleEntreis);
    }
  }

  ngAfterViewInit() {
    // this.fields.select(getFields).subscribe((v) => {
    //   this.fieldsIsRenered = v;
    // });
    this.store.select(getStyle).subscribe((v) => {
      this.arrStyleEntreis = v;
    });
  }
}
