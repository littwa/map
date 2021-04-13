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
import {
  stylesSheet_Textarea,
  stylesSheet_Checkbox,
  stylesSheet_Btn,
  stylesSheet_Select,
  stylesSheet_Input,
} from '../shared/style.sheets';

import { StylePanelComponent } from '../style-panel/style-panel.component';
import { Store } from '@ngrx/store';
import { getFields } from '../core/store/fields/fields.reducers';
import { getStyle, getGeneralStyle } from '../core/store/index';
import { AddFieldsAction } from '../core/store/fields/fields.actions';
import { AddStyleAction } from '../core/store/styles-fields/styleFields.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { valueDefault } from '../shared/value.sheets';

@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.css'],
})
export class CdkPortalComponent implements OnInit {
  stylesSheet_Textarea = stylesSheet_Textarea;
  stylesSheet_Checkbox = stylesSheet_Checkbox;
  stylesSheet_Btn = stylesSheet_Btn;
  stylesSheet_Select = stylesSheet_Select;
  stylesSheet_Input = stylesSheet_Input;

  gottenValuFromForm;

  currentControlItem;

  stylesGeneral: object;
  stylesGeneralInner: object;


  form: FormGroup;
  getForm = () => {
    this.gottenValuFromForm = this.form.value;
    console.log('form--==-', this.form);
  };

  getActualStyle(item) {
    // console.log(' this.currentControlItem==', this.currentControlItem);
    let styleList = this.currentControlItem.find((el) => el[0] === item)[1];
    // console.log('styleList----', styleList);
    return styleList;
  }
  getActualValue(item) {
    let valueInp = this.currentControlItem.find((el) => el[0] === item)[2];
    // console.log('styleList----', valueInp);
    return valueInp;
  }

  // test = null;
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store: Store
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

    this.store.select(getStyle).subscribe((v) => {
      this.currentControlItem = v;
      this.droper = v.map((el) => el[0]);
    });

    this.store.select(getGeneralStyle).subscribe((v) => {
      this.stylesGeneral = v.stylesGeneral;
      this.stylesGeneralInner = v.stylesGeneralInner;
    });
    // console.log(this.stylesGeneral);

    this.form = new FormGroup({});
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(StylePanelComponent);
    this.virtualPortalOutlet.attach(this.componentPortal); // ERROR Error: NG0100 in console
    //=================

    // if (!!this.componentPortal) {
    //   this.virtualPortalOutlet.attach(this.componentPortal);
    // }

    this.domPortal = new DomPortal(this.ref3);
    this.virtualPortalOutlet3.attach(this.domPortal);
    this.domPortal = new DomPortal(this.ref4);
    this.virtualPortalOutlet2.attach(this.domPortal);
  }

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

      this.droper[event.currentIndex] =
        this.droper[event.currentIndex] + '-' + this.droper.length;

      // console.log('this.droper ==', this.droper);
      // console.log('currentControlItem====', this.currentControlItem);

      // this.store.dispatch(new AddFieldsAction([...this.droper]));

      let valueInput: any = { ...valueDefault };

      let matchStyle;
      switch (event.container.data[event.currentIndex].split('-')[0]) {
        case 'input':
          matchStyle = stylesSheet_Input;
          break;
        case 'checkbox':
          matchStyle = stylesSheet_Checkbox;
          break;
        case 'select':
          matchStyle = stylesSheet_Select;
          valueInput.select = [
            ['value1', 'Value1'],
            ['value2', 'Value2'],
          ];
          break;
        case 'textarea':
          matchStyle = stylesSheet_Textarea;
          break;
        case 'button':
          matchStyle = stylesSheet_Btn;
          break;

        default:
          return console.log('Invalid type controll');
      }

      this.store.dispatch(
        new AddStyleAction([
          event.container.data[event.currentIndex],
          matchStyle,
          valueInput,
        ])
      );

      //===================================

      // this.store.select(getStyle).subscribe((v) => {
      //   this.currentControlItem = v;
      //   console.log(
      //     'currentControlItem=',
      //     v.map((el) => el[0])
      //   );
      //   // this.droper
      // });
      //=============================================
      this.currentControlItem.forEach((el) => {
        let typeInput = el[0].split('-')[0];

        let valueControl: any = '';

        if (typeInput === 'button') {
          return;
        }
        if (typeInput === 'checkbox') {
          valueControl = false;
        }

        this.form.addControl(el[0], new FormControl(valueControl));
      });
    }
  }
}
