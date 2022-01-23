import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('src/app/entities/main/main.module').then(m => m.MainModule)
  },
  {
    path: '**',
    loadChildren: () => import('src/app/entities/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
