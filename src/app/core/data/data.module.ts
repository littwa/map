import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('env', reducers),
    // EffectsModule.forFeature([ManegerEffects]),
  ]
})
export class DataModule { }
