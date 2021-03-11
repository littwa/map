import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AuthPageComponent } from './auth/auth.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CdkComponent } from './cdk/cdk.component';
import { PortalModule } from '@angular/cdk/portal';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
import { AnyPippe } from './pipe/any-pipe';
import { DragComponent } from './drag/drag.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormComponent } from './form/form.component';
import { HttClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveComponentModule } from '@ngrx/component';
import { reducers } from './core/store/index'; //metaReducers
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './core/store/effects';

//console.log(1, metaReducers); ///////////

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AuthPageComponent,
    CdkComponent,
    CdkPortalComponent,
    DragComponent,
    FormComponent,
    AnyPippe,
    HttClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    PortalModule,
    DragDropModule,
    HttpClientModule,
    ReactiveComponentModule,
    StoreModule.forRoot(reducers), // , { metaReducers }
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
