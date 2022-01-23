import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../../shared/shared.module';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlaceComponent } from './place/place.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';


@NgModule({
  declarations: [
    WrapperComponent,
    MapComponent,
    PlacesListComponent,
    PlaceComponent,
    NavHeaderComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MainRoutingModule
  ],
  exports: []
})
export class MainModule { }
