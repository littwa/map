import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
// import * as db from 'src/assets/db.json';
import db from 'src/assets/db';

@Injectable({ providedIn: 'root' })
export class MapService {
  public map;
  public marker = null;
  public box;
  constructor() {}

  setBound(): any {
    // const bbox = db.features.map(v => v.geometry.coordinates);
    const bbox = this.box;
    this.map.fitBounds(bbox, {
      // zoom:
      padding: { top: 50, bottom: 50, left: 50, right: 50 }
    });
  }

  private getFitBoundsBox(): any {
    this.box = db.features.reduce((acc, { geometry: { coordinates} }) => {
      acc[0][0] = coordinates[0] > acc[0][0] || acc[1][0] == null ? coordinates[0] : acc[0][0];
      acc[0][1] = coordinates[1] > acc[0][1] || acc[1][0] == null ? coordinates[1] : acc[0][1];
      acc[1][0] = coordinates[0] < acc[1][0] || acc[1][0] == null ? coordinates[0] : acc[1][0];
      acc[1][1] = coordinates[1] < acc[1][1] || acc[1][1] == null ? coordinates[1] : acc[1][1];
      return acc;
    }, [[ null, null], [ null, null]]);
  }

  public initMap(): void {
    this.getFitBoundsBox();
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: environment.map.style,
      // center: [30, 50],
      zoom: 0,
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.getGeoJson();



    // this.map.on('click', (e) => {
    //   console.log(e);
    // });
  }

  getGeoJson(): void {
      this.map.on('load', () => {
        this.map.addSource('places', { type: 'geojson', data: db });
        //  'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',

        // this.map.loadImage(
        //   'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        //   (error, image) => {
        //     if (error) {
        //       throw error;
        //     }
        //     console.log(1114, image);
        //     this.map.addImage('custom-marker', image);
        //   });

        this.map.addLayer({
          id: 'places1',
          type: 'circle',
          source: 'places',
          paint: {
            'circle-color': '#4264fb',
            'circle-radius': 10,
            'circle-stroke-width': 0,
            'circle-stroke-color': '#000'
          }
        });

        this.map.fitBounds(this.box, {
          // zoom:
          padding: { top: 50, bottom: 50, left: 50, right: 50 }
        });

        // this.map.flyTo({
        //   center: this.box,
        //   zoom: 13,
        // });

        // this.map.addLayer({
        //   id: 'places',
        //   type: 'symbol',
        //   source: 'places',
        //   layout: {
        //     'icon-image': 'custom-marker',
        //     // 'text-field': ['get', 'title'],
        //     // 'text-font': [
        //     //   'Open Sans Semibold',
        //     //   'Arial Unicode MS Bold'
        //     // ],
        //     // 'text-offset': [0, 1.25],
        //     // 'text-anchor': 'top'
        //     // 'icon-image': '{icon}',
        //     // 'icon-allow-overlap': true
        //   }
        // });

// Center the map on the coordinates of any clicked circle from the 'circle' layer.
        this.map.on('click', 'places1', (e) => {
        console.log(1000007, e, e.features[0]);
        console.log(1000007, e, e.features[0].geometry.coordinates);
          // this.marker.remove();
        if (this.marker) {
            this.marker.remove();
          }
        this.marker = new mapboxgl.Marker({ color: 'red' })
            .setLngLat(e.features[0].geometry.coordinates)
            .addTo(this.map);


        // this.map.setPaintProperty('places1', 'circle-color', '#fa0000')
        //   .setPaintProperty('places1', 'circle-radius', 12)
        //   .setPaintProperty('places1', 'circle-stroke-width', 2);


        this.map.flyTo({
          center: e.features[0].geometry.coordinates,
          zoom: 15,
        });
      });

// Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
        this.map.on('mouseenter', 'places1', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

// Change it back to a pointer when it leaves.
        this.map.on('mouseleave', 'places1', () => {
        this.map.getCanvas().style.cursor = '';
      });
       });
  }

}
