import {
  Component,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
  Input,
} from '@angular/core';

// import { StyleServices } from '../../shared/style.services';
import { stylesSheet_Btn } from '../../shared/style.sheets';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponet implements OnInit {
  @ViewChild('btn') btnRef: ElementRef<HTMLButtonElement>;
  @Input() isDrop;
  @Input() stylesSheetBtn;
  @Output() stylesSheetBtnCH = new EventEmitter();
  @Input() stylesSheet_Btn = stylesSheet_Btn;
  @Input() getValueForm;
  // @Input() actualValue = { placeholder: 'placeholder-text', required: true };

  ngOnInit() {
    this.stylesSheetBtnCH.emit(this.stylesSheet_Btn);
  }

  clickButton(e) {
    this.getValueForm();
  }
}
