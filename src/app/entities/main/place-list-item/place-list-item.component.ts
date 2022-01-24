import { Component, Input, OnInit } from '@angular/core';
import { IFeatures } from 'src/app/core/interfaces/core.interfaces';

@Component({
  selector: 'app-place-list-item',
  templateUrl: './place-list-item.component.html',
  styleUrls: ['./place-list-item.component.scss']
})
export class PlaceListItemComponent {

  @Input() item: IFeatures;

}
