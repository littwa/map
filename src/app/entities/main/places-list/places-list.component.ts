import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MapService } from 'src/app/services/map.service';
import { getCustomDataSelector } from 'src/app/core/data/state/data.selectors';
import { IFeatures } from 'src/app/core/interfaces/core.interfaces';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent {
  public placesList: Observable<IFeatures[]> = this.store.select(getCustomDataSelector).pipe(map(v => v.features));

  constructor(private store: Store, private mapService: MapService) { }

  public handleItem(item): void {
    this.mapService.handlerPlaceClick(item);
  }
}
