import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';

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
  field: string = 'text';
  posts: { title: string; text: string }[] = [
    { title: 'benz', text: 'anytext' },
    { title: 'oil', text: 'anyqwe' },
    { title: 'diesel', text: 'wertext' },
  ];
}
