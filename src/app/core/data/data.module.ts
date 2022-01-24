import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/core/data/state/data.reducers';
import { ManagerEffects } from 'src/app/core/data/state/data.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([ManagerEffects]),
  ]
})
export class DataModule { }
