import { NgModule } from '@angular/core';
import {CdkPortalComponent} from './cdk-portal.component'
import {SharedModule} from "../shared/shared.module"

import { PortalModule } from '@angular/cdk/portal';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragComponent } from '../drag/drag.component';

import { CheckboxComponent } from '../form-componet/checkbox/checkbox.component';
import { ButtonComponet } from '../form-componet/button/button.component';
import { InputComponent } from '../form-componet/input/input.component';
import { TextareaComponent } from '../form-componet/textarea/textarea.component';
import { SelectComponent } from '../form-componet/select/select.component';



@NgModule({
  declarations: [
    CdkPortalComponent,
    CheckboxComponent,
    ButtonComponet,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    DragComponent ],
  imports: [
    SharedModule,
    DragDropModule,
    PortalModule,

  ],
  // exports:[CdkPortalComponent, CheckboxComponent,
  //   ButtonComponet,
  //   InputComponent,
  //   TextareaComponent,
  //   SelectComponent]
})
export class CdkPortalModule { }
