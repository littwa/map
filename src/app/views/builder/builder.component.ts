import { Component, ElementRef, OnInit, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { stylesSheetBtn, stylesSheetCheckbox, stylesSheetInput, stylesSheetTextarea, stylesSheetSelect } from '../../shared/style.sheets';
import { StylePanelComponent } from '../../style-panel/style-panel.component';
import { getGeneralStyle, getStyle } from '../../core/store/index';
import { AddStyleAction } from '../../core/store/styles-fields/styleFields.actions';
import { valueDefault } from '../../shared/value.sheets';
import { MatchStyle, ValueInput } from 'src/app/core/interfaces';
import { StyleServices } from './../../shared/style.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class CdkPortalComponent implements OnInit, OnDestroy {
  stylesSheetTextarea = stylesSheetTextarea;
  stylesSheetCheckbox = stylesSheetCheckbox;
  stylesSheetBtn = stylesSheetBtn;
  stylesSheetSelect = stylesSheetSelect;
  stylesSheetInput = stylesSheetInput;

  gottenValuFromForm: object;
  currentControlItem: Array<any>;

  subStyleGeneral: Subscription;
  subStyle: Subscription;

  stylesGeneral: object;
  stylesGeneralInner: object;
  form: FormGroup;

  getForm = () => {
    this.gottenValuFromForm = this.form.value;
    console.log('form:', this.form.value);
  };

  getActualStyle(item) {
    return this.currentControlItem.find((el) => el[0] === item)[1];
  }

  getActualValue(item) {
    return this.currentControlItem.find((el) => el[0] === item)[2];
  }

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private store: Store,
    private styleServices: StyleServices
  ) { }
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

    this.subStyle = this.store.select(getStyle).subscribe((v) => {
      this.currentControlItem = v;
      this.droper = v.map((el) => el[0]);
    });

    this.subStyleGeneral = this.store.select(getGeneralStyle).subscribe((v) => {
      this.stylesGeneral = v.stylesGeneral;
      this.stylesGeneralInner = v.stylesGeneralInner;
    });


    this.form = new FormGroup({});

    this.styleServices.removedControl.subscribe(control => this.form.removeControl(control));
  }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(StylePanelComponent);
    this.virtualPortalOutlet.attach(this.componentPortal); // ERROR Error: NG0100 in console


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

      const changedElement = event.container.data[event.currentIndex];

      let { matchStyle, valueInput } = this.generateChangedValue(changedElement);

      this.store.dispatch(
        new AddStyleAction([
          changedElement,
          matchStyle,
          valueInput,
        ])
      );

      this.addControlInForm()

    }
  }

  addControlInForm() {

    this.currentControlItem.forEach((el) => {
      let typeInput = el[0].split('-')[0];
      let valueControl: string | boolean = '';

      if (typeInput === 'button') {
        return;
      }
      if (typeInput === 'checkbox') {
        valueControl = false;
      }

      this.form.addControl(el[0], new FormControl(valueControl));
    });

  }

  generateChangedValue(changedElement): { valueInput, matchStyle } {
    const typeChangedElement = changedElement.split('-')[0];
    let valueInput: ValueInput = { ...valueDefault };
    let matchStyle: MatchStyle;

    if (typeChangedElement === 'select') {
      valueInput.select = [
        ['value1', 'Value1'],
        ['value2', 'Value2'],
      ];
    }

    switch (typeChangedElement) {
      case 'input':
        matchStyle = stylesSheetInput;
        break;
      case 'checkbox':
        matchStyle = stylesSheetCheckbox;
        break;
      case 'select':
        matchStyle = stylesSheetSelect;
        break;
      case 'textarea':
        matchStyle = stylesSheetTextarea;
        break;
      case 'button':
        matchStyle = stylesSheetBtn;
        break;
      default:
        console.log('Invalid type controll');
    }

    return { valueInput, matchStyle }

   }

  ngOnDestroy() {
    this.subStyle.unsubscribe();
    this.subStyleGeneral.unsubscribe();
  }
}
