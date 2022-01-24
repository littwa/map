import { Component, Input, OnInit } from '@angular/core';
import { IFeatures } from 'src/app/core/interfaces/core.interfaces';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent {
  public placeItem;
  public rating = [];

  @Input() set itemActivePlace(value: IFeatures) {
    this.placeItem = value.properties?.state;
    this.rating.length = this.placeItem.rate;
  }

}
