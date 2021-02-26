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
interface IUser {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  lists: IUser = { id: 1, name: 'qwe' };

  userTestStatus: { id: number; name: string }[] = [
    { id: 0, name: 'Available' },
    { id: 1, name: 'Ready' },
    { id: 2, name: 'Started' },
  ];

  person: { name: string; age?: number } = {
    name: 'Tom',
    age: 7,
  };

  text2: string = '';

  price: number = 0;

  items: Item[] = [
    { purchase: 'Oil', done: false, price: 15.9 },
    { purchase: 'Diesel', done: false, price: 60 },
    { purchase: 'Basf', done: true, price: 22.6 },
    { purchase: 'Accumulator', done: false, price: 310 },
  ];

  count: number = 0;

  isRed: boolean = true;

  clicks: number = 0;
  onChanged(increased: any): void {
    increased === true ? this.clicks++ : this.clicks--;
  }

  increase(): void {
    this.count++;
  }

  addIemSuper(e: object): void {
    console.log(e);
  }

  addItem(text: string, price: number): void {
    const arr: { name: string }[] = this.userTestStatus.map((el) => ({
      name: el.name,
    }));
    console.log(arr);
    // this.person = { name: 'Tom', age: 24 };
    // let obj: {[key: string]: any} = {};
    // this.person.qwe = null;
    // console.log(this.person);

    if (text === null || text.trim() === '' || price === null) {
      return;
    }
    this.items.push(new Item(text, price));
  }
}
