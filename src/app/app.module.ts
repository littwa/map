import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CdkComponent } from './cdk/cdk.component';
import { PortalModule } from '@angular/cdk/portal';
import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
import { AnyPippe } from './pipe/any-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Card2Component,
    CdkComponent,
    CdkPortalComponent,
    AnyPippe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
