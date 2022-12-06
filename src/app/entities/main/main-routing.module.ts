import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from 'src/app/entities/main/wrapper/wrapper.component';
import { MapComponent } from 'src/app/entities/main/map/map.component';

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
        component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
