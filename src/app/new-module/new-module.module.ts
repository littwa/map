import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentNameMComponent} from '../NewModuleModule/component-name-m/component-name-m.component'



@NgModule({
  declarations: [ComponentNameMComponent],
  imports: [
    CommonModule
  ],
  exports:[ComponentNameMComponent]
})
export class NewModuleModule { }
