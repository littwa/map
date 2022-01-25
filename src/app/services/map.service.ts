import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { MaptilerApiService } from './maptiler-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { customDataGetRequest, dataGetRequest } from 'src/app/core/data/data.actions';
import { Store } from '@ngrx/store';

import { IDataState, IFeatures } from 'src/app/core/interfaces/core.interfaces';
import { getCustomDataSelector } from 'src/app/core/data/data.selectors';
import { paintLayout } from 'src/app/constats/map.comfigs';

@Injectable({ providedIn: 'root' })
export class MapService {
  public statePlaceList$ = new BehaviorSubject<boolean>(true);
  public activePlace$ = new BehaviorSubject<null | IFeatures>(null);
  public marker = null;
  private ID_LAYER = 'places1';
  public map;
  public box;

  constructor(private maptilerApiService: MaptilerApiService,
              public store: Store) {}


  private initMapBox(): void {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: environment.map.style,
      // center: [30, 50],
      zoom: 0,
    }).fitBounds(this.box, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 }
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  setBound(): void {
    this.map.fitBounds(this.box, {
      // zoom:
      padding: { top: 50, bottom: 50, left: 50, right: 50 }
    });
  }

  private getFitBoundsBox(data: IDataState): any {
    this.box = data.features.reduce((acc, { geometry: { coordinates } }) => {
      acc[0][0] = coordinates[0] > acc[0][0] || acc[1][0] == null ? coordinates[0] : acc[0][0];
      acc[0][1] = coordinates[1] > acc[0][1] || acc[1][0] == null ? coordinates[1] : acc[0][1];
      acc[1][0] = coordinates[0] < acc[1][0] || acc[1][0] == null ? coordinates[0] : acc[1][0];
      acc[1][1] = coordinates[1] < acc[1][1] || acc[1][1] == null ? coordinates[1] : acc[1][1];
      return acc;
    }, [[null, null], [null, null]]);
  }

  public initMap(): void {
    this.store.dispatch(customDataGetRequest({ payload: null }));
    this.store.dispatch(dataGetRequest({ payload: null }));
    this.store.select(getCustomDataSelector).subscribe((data: IDataState) => {
      this.getFitBoundsBox(data);
      this.initMapBox();
      this.getGeoJson(data);
    });

  }

  private getGeoJson(data): void {
    this.map.on('load', () => {
      this.map.addSource('places', { type: 'geojson', data });

      this.map.addLayer({
        id: this.ID_LAYER,
        type: 'circle',
        source: 'places',
        paint: paintLayout
      });

      this.map.on('click', this.ID_LAYER, (e) => {

        const { id } = e.features[0];

        if (this.marker) {
          this.marker.remove();
        }

        this.marker = new mapboxgl.Marker({ color: 'red' })
          .setLngLat(e.features[0].geometry.coordinates)
          .addTo(this.map);

        this.map.flyTo({
          center: e.features[0].geometry.coordinates,
          zoom: 15,
        });

        this.activePlace$.next(this.defineActivePlace(data, id));
        this.statePlaceList$.next(false);
      });

      this.map.on('mouseenter', this.ID_LAYER, () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      this.map.on('mouseleave', this.ID_LAYER, () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
  }

  public handlerPlaceClick(item): void {
    if (this.marker) {
      this.marker.remove();
    }

    this.marker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat(item.geometry.coordinates)
      .addTo(this.map);

    this.map.flyTo({
      center: item.geometry.coordinates,
      zoom: 15,
    });

    this.activePlace$.next(item);
    this.statePlaceList$.next(false);
  }

  public removeMarker(): void {
    this.marker.remove();
  }

  public defineActivePlace(data: IDataState, id: number): IFeatures | null {
    return data.features.find(f => f.id === id) || null;
  }

  public getActivePlace(): Observable<null | IFeatures> {
    return this.activePlace$.asObservable();
  }

  public getStatePlaceList(): Observable<boolean> {
    return this.statePlaceList$.asObservable();
  }

}
