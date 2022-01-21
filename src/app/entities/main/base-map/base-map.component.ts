import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.scss']
})
export class BaseMapComponent implements OnInit {
  map;
  marker1;
  marker2;
  marker3;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    // this.initMap();
    this.mapService.initMap();
  }

//   initMap(): void {
//     this.map = new mapboxgl.Map({
//       accessToken: environment.mapbox.accessToken,
//       container: 'map',
//       style: environment.map.style,
//       center: [30.61623, 50.39548],
//       zoom: 13,
//     });
//
//     this.map.addControl(new mapboxgl.NavigationControl());
//
// // Create a default Marker and add it to the map.
//     this.marker1 = new mapboxgl.Marker()
//       .setDraggable(true)
//       .setLngLat([30.61623, 50.39548])
//       .addTo(this.map);
//
//
// // Create a default Marker, colored black, rotated 45 degrees.
//     this.marker2 = new mapboxgl.Marker({ color: 'red'})
//       .setLngLat([30.60912, 50.45460])
//       .addTo(this.map);
//
//     // this.marker2.getElement().addEventListener('click', (e) => {
//     //   console.log(111, e);
//     // });
//
//     console.log(100001, this.marker1);
//     // this.marker3 = new mapboxgl.Marker({ color: 'red'})
//     //   .setLngLat([30.60912, 50.45460])
//     //   .addTo(this.map);
//
//     this.map.on('click', (e) => {
//       console.log(e);
//       // this.map.flyTo({
//       //   center: e.features[0].geometry.coordinates
//       // });
// // {
// //     lngLat: {
// //         lng: 40.203,
// //         lat: -74.451
// //     },
// //     originalEvent: {...},
// //     point: {
// //         x: 266,
// //         y: 464
// //     },
// //      target: {...},
// //      type: "click"
// // }
//     });
//   }

  handle(): void {
    const lngLat = this.marker1.getLngLat();
    console.log(11111, lngLat);
    // this.central();
  }
//
//   central(): void {
//     // this.map.on('click', () => {
// // Add a GeoJSON source with 3 points.
//       this.map.addSource('points', {
//         type: 'geojson',
//         data: {
//           type: 'FeatureCollection',
//           features: [
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: [30.550, 50.405 ]
//               }
//             },
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: [30.550, 50.431]
//               }
//             },
//             {
//               type: 'Feature',
//               properties: {},
//               geometry: {
//                 type: 'Point',
//                 coordinates: [30.458, 50.404 ]
//               }
//             }
//           ]
//         }
//       });
// // Add a circle layer
//       this.map.addLayer({
//         id: 'circle',
//         type: 'circle',
//         source: 'points',
//         paint: {
//           'circle-color': '#4264fb',
//           'circle-radius': 8,
//           'circle-stroke-width': 2,
//           'circle-stroke-color': '#ffffff'
//         }
//       });
//
// // Center the map on the coordinates of any clicked circle from the 'circle' layer.
//       this.map.on('click', 'circle', (e) => {
//         console.log(1000007, e);
//         this.map.flyTo({
//           center: e.features[0].geometry.coordinates
//         });
//       });
//
// // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
//       this.map.on('mouseenter', 'circle', () => {
//         this.map.getCanvas().style.cursor = 'pointer';
//       });
//
// // Change it back to a pointer when it leaves.
//       this.map.on('mouseleave', 'circle', () => {
//         this.map.getCanvas().style.cursor = '';
//       });
//     // });
//   }
}
