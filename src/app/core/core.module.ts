import { NgModule } from '@angular/core';
// import { DataModule } from 'src/app/core/data/data.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/core/data/data.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ManagerEffects } from 'src/app/core/data/data.effects';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([ManagerEffects]),
  ],
  exports: []
})
export class CoreModule {}
