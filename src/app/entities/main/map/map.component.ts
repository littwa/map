import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public itemActivePlace$ = this.mapService.getActivePlace();
  public isPlaceListShown$ = this.mapService.statePlaceList$;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {
    this.mapService.initMap();
  }

  handle(): void {
    this.mapService.setBound();
    this.mapService.statePlaceList$.next(true);
  }

}
