import { Component, Input } from '@angular/core';
import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  constructor(private StyleServices: StyleServices) {}
  stylesSheet_Textarea = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };
  @Input() isDrop;
  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleTextarea(this.stylesSheet_Textarea);
    }
  }
}
