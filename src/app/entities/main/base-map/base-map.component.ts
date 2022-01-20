import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.scss']
})
export class BaseMapComponent implements OnInit {
  map;
  marker1;
  marker2;

  constructor() {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    // mapboxgl.setRTLTextPlugin('https://cdn.maptiler.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: environment.map.style,
      // style: environment.mapTiler.key,
      center: [12.5, 55.5],
      zoom: 8,
    });

    this.map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map.
    this.marker1 = new mapboxgl.Marker()
      .setDraggable(true)
      .setLngLat([12.5, 55.5])
      .addTo(this.map);


// Create a default Marker, colored black, rotated 45 degrees.
    this.marker2 = new mapboxgl.Marker({ color: 'red', rotation: 45 })
      .setLngLat([11.5, 55.5])
      .addTo(this.map);
  }

  handle(): void {
    const lngLat = this.marker1.getLngLat();
    console.log(11111, lngLat);
    this.central();
  }

  central(): void {
    // this.map.on('click', () => {
// Add a GeoJSON source with 3 points.
      this.map.addSource('points', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [12.5, 51.5]
              }
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [10.8, 52.5]
              }
            },
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [11.5, 53.5]
              }
            }
          ]
        }
      });
// Add a circle layer
      this.map.addLayer({
        id: 'circle',
        type: 'circle',
        source: 'points',
        paint: {
          'circle-color': '#4264fb',
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#ffffff'
        }
      });

// Center the map on the coordinates of any clicked circle from the 'circle' layer.
      this.map.on('click', 'circle', (e) => {
        console.log(1000007, e);
        this.map.flyTo({
          center: e.features[0].geometry.coordinates
        });
      });

// Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
      this.map.on('mouseenter', 'circle', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

// Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'circle', () => {
        this.map.getCanvas().style.cursor = '';
      });
    // });
  }
}
