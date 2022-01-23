import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/services/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService,
              private router: Router) {}

  ngOnInit(): void {
    this.mapService.initMap();
  }

  handle(): void {
    console.log(110333, this.mapService.map.getSource('places'));
    this.mapService.setBound();
  }

}
