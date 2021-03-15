import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  CdkPortalOutlet,
  ComponentPortal,
  DomPortal,
  TemplatePortal,
  Portal,
} from '@angular/cdk/portal';

import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';

import { StylePanelComponent } from '../style-panel/style-panel.component';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/fields/fields.reducers';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.css'],
})
export class CdkPortalComponent {
  testtttt = null;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private storeFields: Store
  ) {}
  domPortal: DomPortal<any>;
  templatePortal: TemplatePortal<any>;
  componentPortal: ComponentPortal<any>;

  @ViewChild('virtualContainer', { read: CdkPortalOutlet })
  virtualPortalOutlet: CdkPortalOutlet;
  @ViewChild('virtualContainer2', { read: CdkPortalOutlet })
  virtualPortalOutlet2: CdkPortalOutlet;
  @ViewChild('virtualContainer3', { read: CdkPortalOutlet })
  virtualPortalOutlet3: CdkPortalOutlet;

  @ViewChild('ref3') ref3: ElementRef;
  @ViewChild('ref4') ref4: ElementRef;

  // ngDoCheck() {
  //   console.log(33);
  // }

  ngAfterViewInit() {
    console.log(
      111,
      this.storeFields.select(getFields).subscribe((v) => {
        console.log(v);
        this.testtttt = v;
        console.log(222, this.testtttt);
      })
    );
    //======
    this.componentPortal = new ComponentPortal(StylePanelComponent);
    // this.virtualPortalOutlet.attach(this.componentPortal);
    //======
    this.domPortal = new DomPortal(this.ref3);
    this.virtualPortalOutlet3.attach(this.domPortal);
    this.domPortal = new DomPortal(this.ref4);
    this.virtualPortalOutlet2.attach(this.domPortal);
  }

  //==========================================================

  drag = ['input', 'textarea', 'select', 'checkbox', 'button'];

  droper = [];

  drop(event: CdkDragDrop<any[]>): void {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(this.droper);
    }
  }
}
