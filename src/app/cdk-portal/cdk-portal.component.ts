import {
  Component,
  ElementRef,
  TemplateRef,
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

import { DragComponent } from '../drag/drag.component';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.css'],
})
export class CdkPortalComponent {
  constructor(private _viewContainerRef: ViewContainerRef) {}
  domPortal: DomPortal<any>;
  templatePortal: TemplatePortal<any>;

  @ViewChild('virtualContainer', { read: CdkPortalOutlet })
  virtualPortalOutlet: CdkPortalOutlet;
  @ViewChild('virtualContainer2', { read: CdkPortalOutlet })
  virtualPortalOutlet2: CdkPortalOutlet;
  @ViewChild('virtualContainer3', { read: CdkPortalOutlet })
  virtualPortalOutlet3: CdkPortalOutlet;

  @ViewChild('ref3') ref3: ElementRef;
  @ViewChild('ref4') ref4: ElementRef;
  ngAfterViewInit() {
    this.domPortal = new DomPortal(this.ref3);
    this.virtualPortalOutlet3.attach(this.domPortal);
    this.domPortal = new DomPortal(this.ref4);
    this.virtualPortalOutlet2.attach(this.domPortal);
  }

  //=======================================

  // @ViewChild('cardListContainer', { read: ViewContainerRef })
  // tepmlListViewContainerRef: ViewContainerRef;

  // @ViewChild('ref1') ref1: ElementRef;

  // @ViewChild('ref2') ref2: TemplateRef<unknown>;

  // portalOpenCard(): void {
  //   this.detachContainers();
  //   // console.log(33, this.ref2);
  //   // this.templatePortal = new TemplatePortal(this.ref2, this._viewContainerRef);
  //   // this.virtualPortalOutlet.attach(this.templatePortal);

  //   //=======
  //   // this.domPortal = new DomPortal(this.ref1);
  //   // this.virtualPortalOutlet2.attach(this.domPortal);
  //   //======
  //   const cardComponentPortal = new ComponentPortal<any>(DragComponent);

  //   const ref = this.virtualPortalOutlet.attach(cardComponentPortal);

  //   // console.log(ref);
  // }

  // portalCloseCard(): void {
  //   this.detachContainers();
  // }

  // private detachContainers(): void {
  //   this.virtualPortalOutlet.detach();
  //   this.virtualPortalOutlet2.detach();
  // }

  //==========================================================

  drag = ['input', 'texteria', 'select', 'checkbox', 'button'];

  droper = [];

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
