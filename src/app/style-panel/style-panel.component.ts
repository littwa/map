import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/index';
import { StyleServices } from '../shared/style.services';

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.css'],
})
export class StylePanelComponent implements AfterViewInit {
  panelOpenState = false;
  fieldsIsRenered: string[];
  constructor(private fields: Store, private StyleServices: StyleServices) {}
  arrStyleEntreis: any = [];

  // arrForRender = [];

  // entObj() {
  //   return [[1, 2]];
  //   // this.arrForRender = Object.entries(this.arrStyleEntreis);
  // }

  ngDoCheck() {
    console.log(667788, this.arrStyleEntreis[0]);
  }

  ngAfterViewInit() {
    this.fields.select(getFields).subscribe((v) => {
      this.fieldsIsRenered = v;
      // console.log(777, v);
      // console.log(88, this.fieldsIsRenered);
    });

    this.StyleServices.getAllStyles().subscribe((v) => {
      this.arrStyleEntreis = v;
    });
  }
}
