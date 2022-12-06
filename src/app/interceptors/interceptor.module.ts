import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MetaInterceptor } from 'src/app/interceptors/meta.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: MetaInterceptor, multi: true },
  ]
})
export class InterceptorModule {
}
