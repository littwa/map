import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.anyFn = this.anyFn.bind(this);
  }

  name: string = 'Tom';

  countFn: number = 0;
  // tog: boolean = false;
  nameA: any = 'A';

  nameAFn(e: string): void {
    this.nameA = e;
  }

  anyFnArrow = (v: number) => {
    this.countFn = this.countFn + v;
  };

  anyFn(): void {
    this.countFn++;
  }

  parentFn(): void {
    console.log('parentFn!!s', this.name);
  }
}
