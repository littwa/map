import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { Card2Component } from '../card2/card2.component';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.css'],
})
export class CdkPortalComponent {
  @ViewChild('virtualContainer', { read: CdkPortalOutlet })
  virtualPortalOutlet!: CdkPortalOutlet;

  @ViewChild('cardListContainer', { read: ViewContainerRef })
  epmlListViewContainerRef!: ViewContainerRef;

  portalOpenCard(): void {
    this.detachContainers();

    const cardComponentPortal = new ComponentPortal<any>(Card2Component);

    const ref = this.virtualPortalOutlet.attach(cardComponentPortal);

    console.log(ref);
  }

  portalCloseCard(): void {
    this.detachContainers();
  }

  private detachContainers(): void {
    this.virtualPortalOutlet.detach();
  }
}
