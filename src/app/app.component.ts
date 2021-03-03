import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // constructor() {
  //   const f = 'title';

  //   console.log(this.posts[0][f]);
  // }
  name: any = 'qwe';
  newDate: any = Date.now();
  obj: object = { q: 1, w: { d: 3, t: { f: 4 } } };
  serch: string = '';
  posts: { title: string; text: string }[] = [
    { title: 'benz', text: 'anytext' },
    { title: 'oil', text: 'anyqwe' },
    { title: 'diesel', text: 'wertext' },
  ];
  // fnAn() {
  //   const f = 'title';
  //   this.posts[0][f];
  // }
}
