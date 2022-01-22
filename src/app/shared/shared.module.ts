import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from 'src/app/shared/components/main-layout/main-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports: [
    MainLayoutComponent,
    MatSidenavModule
  ]
})
export class SharedModule { }
