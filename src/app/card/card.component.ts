import {
  ViewChild,
  ElementRef,
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
  ContentChild,
} from '@angular/core';

// implements OnInit, DoCheck, OnChanges

@Component({
  selector: 'app-card',
  template: `<h4>CardComponent</h4>
    <input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />
    <p>{{ userName }}</p>`,
})
export class CardComponent {
  @Input() userName: any;
  @Output() userNameChange = new EventEmitter();
  onNameChange(model: string): void {
    // this.userName = model;
    this.userNameChange.emit(model);
  }
}
