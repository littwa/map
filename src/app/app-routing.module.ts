import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth/auth.component';
import { DragComponent } from './drag/drag.component';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
// import { HttClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'drag', component: DragComponent },
  { path: 'sdk', component: CdkPortalComponent },
  // { path: 'http-client', component: HttClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
