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
} from '@angular/cdk/portal';

import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';

import { StylePanelComponent } from '../style-panel/style-panel.component';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/fields/fields.reducers';
import { getStyle } from '../core/store/index';
import { AddFieldsAction } from '../core/store/fields/fields.actions';
import { AddStyleAction } from '../core/store/styles-fields/styleFields.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { TextareaComponent } from '../form-componet/textarea/textarea.component';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.css'],
})
export class CdkPortalComponent {
  stylesSheet_Textarea = {
    border: '5.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };
  // stylesSheet_Textarea;

  superValue = 'place-holder-text';

  onNameChange(v) {
    console.log(v);
    console.log(this.superValue);
  }
  //============
  placehold = 'any-text';
  form: FormGroup;
  getForm() {
    console.log(this.form.value);
    console.log(this.test);
  }

  test = null;
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

  ngOnInit() {
    // let str$ = this.storeFields.select(getStyle);
    // str$.subscribe((v) => {
    //   this.stylesSheet_Textarea = v.textarea;
    //   this.test = v;
    //   console.log(131, this.stylesSheet_Textarea);
    // });

    this.form = new FormGroup({
      name1: new FormControl(''),
      name2: new FormControl(''),
      name3: new FormControl(''),
    });
  }

  ngAfterViewInit() {
    //======
    this.componentPortal = new ComponentPortal(StylePanelComponent);

    this.virtualPortalOutlet.attach(this.componentPortal);
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
      console.log(
        55,
        // (this.droper = this.droper.map((el) => el + 1)),
        event,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // console.log(66, this.droper);
      // stylesSheet_Textarea
      this.storeFields.dispatch(new AddFieldsAction([...this.droper])); // [...event.container.data]
      this.storeFields.dispatch(
        new AddStyleAction([
          event.container.data[event.currentIndex] +
            event.container.data.length,
          this.stylesSheet_Textarea,
        ])
      );
    }
  }
}
