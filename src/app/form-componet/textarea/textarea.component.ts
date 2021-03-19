import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { StyleServices } from '../../shared/style.services';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  constructor(private StyleServices: StyleServices) {}
  // stylesSheet_Textarea = {
  //   border: '1.5px solid #888',
  //   borderRadius: '20px',
  //   fontSize: '12px',
  //   padding: '5px 10px',
  //   backgroundColor: '#fff',
  // };

  @Input() stylesSheet_Textarea = {
    border: '1.5px solid #888',
    borderRadius: '20px',
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#fff',
  };
  @Input() superValue = 'place-holder-text';
  @Input() isDrop;
  ngOnInit() {
    if (this.isDrop) {
      this.StyleServices.addStyleTextarea(this.stylesSheet_Textarea);
    }
  }
  //===========ControlValueAccessor==============================
  _value: any = '';

  @Input()
  set value(value: any) {
    this._value = value;
    this.writeValue(value);
  }

  get value(): any {
    return this._value;
  }

  onChange = (value) => {};

  writeValue(value): void {
    this.onChange(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {}
}
