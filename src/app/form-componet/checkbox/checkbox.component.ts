import { Component, Input } from '@angular/core';
import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
  constructor(private StyleServices: StyleServices) {}
  stylesSheet_Checkbox = {
    width: '15px',
    height: '15px',
  };
  @Input() isDrop;
  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleCheckbox(this.stylesSheet_Checkbox);
    }
  }
}
