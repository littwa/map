import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<ng-content></ng-content>
    <div>CardComponent {{ name }}</div>
    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
})
export class CardComponent {
  name: string = 'Ben';

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased: any): void {
    this.onChanged.emit(increased);
  }
}
