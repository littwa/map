import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component implements OnChanges, OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 5;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 5;

  consFn(): void {
    console.log(this.value);
  }

  ngOnInit(): void {
    console.log(`onInit`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges in Card2Component');
    console.log(changes);
  }

  // ngDoCheck(): void {
  //   console.log(1, this.value);
  // }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
