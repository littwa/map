import { Component, Input, OnInit } from '@angular/core';
import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  constructor(private StyleServices: StyleServices) {}
  stylesSheet_Select = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 18px',
    backgroundColor: '#fff',
  };
  @Input() isDrop;
  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleSelect(this.stylesSheet_Select);
    }
  }
}
