import {
  Component,
  ContentChild,
  ElementRef,
  Output,
  ViewChild,
  EventEmitter,
  OnInit,
  Input,
} from '@angular/core';

import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponet implements OnInit {
  constructor(private StyleServices: StyleServices) {}
  stylesSheet_Btn = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };

  @ViewChild('btn') btnRef: ElementRef<HTMLButtonElement>;
  @Input() isDrop;
  @Input() stylesSheetBtn;
  @Output() stylesSheetBtnCH = new EventEmitter();

  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleBtn(this.stylesSheet_Btn);
    }

    // console.log(666, this.isDrop);
    this.stylesSheetBtnCH.emit(this.stylesSheet_Btn);
  }

  clickButton(e) {
    const value = getComputedStyle(this.btnRef.nativeElement);
  }
}
