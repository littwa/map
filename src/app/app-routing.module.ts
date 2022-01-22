import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainModule } from 'src/app/entities/main/main.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map/box'
  }
];

const config = { preloadingStrategy: PreloadAllModules };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
