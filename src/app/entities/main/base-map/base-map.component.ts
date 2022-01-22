import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MapService } from 'src/app/services/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.scss']
})
export class BaseMapComponent implements OnInit {

  constructor(private mapService: MapService,
              private router: Router) {}

  ngOnInit(): void {
    this.mapService.initMap();
  }

  handle(): void {
    console.log(110333);
    this.router.navigate(['g']);
    // this.mapService.setBound();
  }

}
