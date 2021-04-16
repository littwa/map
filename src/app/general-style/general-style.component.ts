import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'general-style-component',
  templateUrl: './general-style.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GeneralStyleComponent),
      multi: true,
    },
  ],
})
export class GeneralStyleComponent {
  @Input() prop;
  @Input() nameProp;
  @Input() forControlAcc;

  ngAfterViewInit() {
    this._value = this.prop;
  }


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
