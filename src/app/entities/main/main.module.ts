import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { BaseMapComponent } from './base-map/base-map.component';


@NgModule({
  declarations: [
    WrapperComponent,
    BaseMapComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [

  ]
})
export class MainModule { }
