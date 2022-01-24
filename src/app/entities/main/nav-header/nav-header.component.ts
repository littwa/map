import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent  {

  public statePlaceList$: Observable<boolean> = this.mapService.getStatePlaceList();

  constructor(private mapService: MapService) { }

  public handleNavItemClick(): void {
    this.mapService.setBound();
    this.mapService.statePlaceList$.next(true);
    this.mapService.activePlace$.next(null);
    this.mapService.removeMarker();
  }

}
