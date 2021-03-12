import { Component, NgModule } from '@angular/core';
import { HttClientComponent } from './http-client.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from '../form/form.component';

@NgModule({
  declarations: [HttClientComponent, FormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'http-client', component: HttClientComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class HttpClientCompModule {}
