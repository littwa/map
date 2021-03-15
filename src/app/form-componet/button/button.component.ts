import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponet {
  @ViewChild('btn') btnRef: ElementRef<HTMLButtonElement>;
  stylesSheet = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };

  clickButton(e) {
    // console.log(e);
    // console.log(this.btnRef);

    console.log(1, this.btnRef.nativeElement.style);
    // console.log(4, typeof this.btnRef.nativeElement.style);

    const value = getComputedStyle(this.btnRef.nativeElement);
    console.log(2, value);
  }
}
