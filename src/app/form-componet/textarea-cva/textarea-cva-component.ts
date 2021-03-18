import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-cva-component',
  template: `<textarea
    rows="10"
    cols="30"
    [placeholder]="placeholder"
    [ngStyle]="styleExp"
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
export class TextareaCVAComponent implements OnInit, ControlValueAccessor {
  @Input() styleArray: any;
  styleExp = {};
  placeholder = '';

  _value: any = '';

  @Input()
  set value(value: any) {
    this._value = value;
    this.writeValue(value);
  }

  get value(): any {
    return this._value;
  }

  constructor() {}

  ngOnInit(): void {}

  onChange = (value) => {};

  onTouched = () => {};

  writeValue(value): void {
    this.onChange(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
