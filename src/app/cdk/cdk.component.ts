import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import {
  ComponentPortal,
  DomPortal,
  Portal,
  TemplatePortal,
  CdkPortal,
} from '@angular/cdk/portal';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.css'],
})
export class CdkComponent implements AfterViewInit {
  @ViewChild('templatePortalContent')
  templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<PortalExampleComponent>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(PortalExampleComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);

    // this.CdkPortal= new CdkPortal()
  }
}

@Component({
  selector: ' app-cdk-portal-example',
  template: 'Hello, this is a component portal',
})
export class PortalExampleComponent {}
