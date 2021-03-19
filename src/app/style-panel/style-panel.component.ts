import {
  Component,
  OnInit,
  AfterViewInit,
  DoCheck,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/index';
import { StyleServices } from '../shared/style.services';
import { getStyle } from '../core/store/index';

@Component({
  selector: 'app-style-panel',
  templateUrl: './style-panel.component.html',
  styleUrls: ['./style-panel.component.css'],
})
export class StylePanelComponent implements AfterViewInit {
  testttt;
  panelOpenState = false;
  fieldsIsRenered: string[];
  constructor(private fields: Store, private StyleServices: StyleServices) {}
  arrStyleEntreis: any = [];

  ngDoCheck() {
    if (this.arrStyleEntreis.length > 0) {
      console.log(22, this.arrStyleEntreis);
      console.log(44, this.fieldsIsRenered);
    }
  }

  ngAfterViewInit() {
    // this.testttt = this.objStyle && Object.keys(this.objStyle);
    // console.log();

    this.fields.select(getFields).subscribe((v) => {
      this.fieldsIsRenered = v;
    });

    this.fields.select(getStyle).subscribe((v) => {
      this.arrStyleEntreis = v;
    });
  }

  //   this.StyleServices.getAllStyles().subscribe((v) => {
  //     this.arrStyleEntreis = v;
  //   });
  // }
}
