import { Component, NgModule } from '@angular/core';
import { HttClientComponent } from './http-client.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormComponent } from '../../form/form.component';
import {NewModuleModule} from "../../new-module/new-module.module"

@NgModule({
  declarations: [HttClientComponent, FormComponent],
  imports: [
    SharedModule,
    NewModuleModule,
    RouterModule.forChild([
      { path: 'http-client', component: HttClientComponent },
    ]),
  ],
  exports: [RouterModule, NewModuleModule],
})
export class HttpClientCompModule {}
