import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/auth.component';
import { DragComponent } from './drag/drag.component';
import { RegisterComponent } from './register/register-component';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
import { AuthGuard } from './auth.guard';
import { HttClientComponent } from './views/http-client/http-client.component'
import {CdkPortalModule} from './cdk-portal/cdk-portal.module'

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'sdk', component: CdkPortalComponent },
  { path: 'sdk', component: CdkPortalComponent, loadChildren: ()=> import('./cdk-portal/cdk-portal.module').then(m=>m.CdkPortalModule) },
  // { path: 'sdk', component: CdkPortalComponent, canActivate: [AuthGuard] },
  { path: 'http-client', component: HttClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
