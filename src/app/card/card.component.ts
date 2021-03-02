import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

// implements OnInit, DoCheck, OnChanges

@Component({
  selector: 'app-card',
  template: `<h4 (click)="onChegeOneSide(2)">CardComponent + onChegeOneSide</h4>
    <p>P_CardComponent {{ anyName }}</p>
    <input [ngModel]="anyName" (ngModelChange)="onChengeAnyName($event)" />`,
})
export class CardComponent {
  @Input() anyName: any;
  @Output() togVal = new EventEmitter<string>();
  @Output() oneSide = new EventEmitter();

  onChengeAnyName(v: string): void {
    this.togVal.emit(v);
    this.anyName = v;
    console.log(this.anyName);
  }
  onChegeOneSide(v: number): void {
    this.oneSide.emit(v);
  }
}
