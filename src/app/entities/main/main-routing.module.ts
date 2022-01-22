import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from 'src/app/entities/main/wrapper/wrapper.component';
import { BaseMapComponent } from 'src/app/entities/main/base-map/base-map.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'box'
  },
  {
    path: '', component: WrapperComponent,
    children: [
      {
        path: 'box',
        component: BaseMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
