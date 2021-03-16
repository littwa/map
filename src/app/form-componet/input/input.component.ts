import { Component, Input } from '@angular/core';
import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private StyleServices: StyleServices) {}
  stylesSheet_Input = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };
  @Input() isDrop;
  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleInput(this.stylesSheet_Input);
    }
  }
}
