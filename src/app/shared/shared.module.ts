import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
// import { HttClientComponent } from '../http-client/http-client.component';
// import {NewModuleModule} from "../new-module/new-module.module"

@NgModule({
  // declarations: [HttClientComponent],

  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ReactiveComponentModule],
})
export class SharedModule {}
