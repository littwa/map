import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-cva-component',
  template: `<textarea
    rows="10"
    cols="30"
    [placeholder]="styleArray"
    [ngStyle]="styleAny"
    [(ngModel)]="value"
  ></textarea>`,
  // styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaCVAComponent),
      multi: true,
    },
  ],
})
export class TextareaCVAComponent implements ControlValueAccessor {
  styleAny = { color: 'red' };

  _value: any = '';

  @Input() styleArray: any;

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
