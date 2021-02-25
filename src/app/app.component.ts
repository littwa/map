// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent {
//   title = 'forms-builder';
// }

import { Component } from '@angular/core';

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
})
export class AppComponent {
  // text: string = ''; ////////////
  text: any;
  // text: string;
  price: number = 0;

  items: Item[] = [
    { purchase: 'Oil', done: false, price: 15.9 },
    { purchase: 'Diesel', done: false, price: 60 },
    { purchase: 'Basf', done: true, price: 22.6 },
    { purchase: 'Accumulator', done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    if (text == null || text.trim() == '' || price == null) return;
    this.items.push(new Item(text, price));
  }
}
