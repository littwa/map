// import { DragComponent } from './drag/drag.component';
// import { PortalModule } from '@angular/cdk/portal';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { FormComponent } from './form/form.component';
// import { HttClientComponent } from './http-client/http-client.component';
// import { HttpClientModule } from '@angular/common/http';
// import { CheckboxComponent } from './form-componet/checkbox/checkbox.component';
// import { ButtonComponet } from './form-componet/button/button.component';
// import { InputComponent } from './form-componet/input/input.component';
// import { TextareaComponent } from './form-componet/textarea/textarea.component';
// import { SelectComponent } from './form-componet/select/select.component';
// import { CdkPortalModule } from '../app/cdk-portal/cdk-portal.module'
// import { NewModuleModule} from "./new-module/new-module.module"
// import { CdkComponent } from './cdk/cdk.component';
// import { CdkPortalComponent } from './cdk-portal/cdk-portal.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from './register/register-component';
// import { AuthPageComponent } from './auth/auth.component';
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
    // AuthPageComponent,
    // CdkComponent,
    // CdkPortalComponent,
    // DragComponent,
    // FormComponent,
    // HttClientComponent,
    // CheckboxComponent,
    // ButtonComponet,
    // InputComponent,
    // TextareaComponent,
    // SelectComponent,
    AnyPippe,

    StylePanelComponent,
    // RegisterComponent,
    TextareaCVAComponent,
    GeneralStyleComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    // PortalModule,
    // DragDropModule,
    MatButtonModule,
    MatExpansionModule,
    // ReactiveComponentModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([Effects, EffectsSteleFields]),
    // HttpClientModule,
    HttpClientCompModule,
    SharedModule,
    AuthModule,
    RegisterModule
    // NewModuleModule,
    // CdkPortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
