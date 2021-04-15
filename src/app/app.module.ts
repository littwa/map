
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { AnyPippe } from './pipe/any-pipe';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/store/index'; //metaReducers
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './core/store/effects';
import { EffectsSteleFields } from './core/store/styles-fields/effects';
import { HttpClientCompModule } from './views/http-client/http-clien.module';
import { SharedModule } from './shared/shared.module';
import { StylePanelComponent } from './style-panel/style-panel.component';
import { TextareaCVAComponent } from './form-componet/textarea-cva/textarea-cva-component';
import { GeneralStyleComponent } from './general-style/general-style.component';
import { AuthModule } from './views/auth/auth.module'
import { RegisterModule } from './views/register/register.module'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnyPippe,
    StylePanelComponent,
    TextareaCVAComponent,
    GeneralStyleComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([Effects, EffectsSteleFields]),
    AppRoutingModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatExpansionModule,
    HttpClientCompModule,
    SharedModule,
    AuthModule,
    RegisterModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
