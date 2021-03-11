import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginAction } from '../core/store/action';
import { State, getUser } from '../core/store/index';
import { User } from '../core/interfaces';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
})
export class AuthPageComponent {
  email: string = '';
  password: string = '';
  // form: FormGroup;
  user$: Observable<User>;
  // user2$: Observable<User>;

  constructor(private store: Store<State>) {}

  onClick() {
    this.store.dispatch(
      new LoginAction({ email: this.email, password: this.password })
    );
  }

  ngOnInit(): void {
    this.user$ = this.store.select(getUser);
    // this.user2$ = this.store.pipe(select(getUser));
    // this.initForm();
    console.log('ngOnInit, user$ ', this.user$);
    // console.log('store ', this.store);
  }

  // private initForm(): void {
  //   this.form = new FormGroup({
  //     email: new FormControl(''),
  //   });
  // }

  // onLoginClick(): void {
  //   this.store.dispatch(new LoginAction(this.form.value));
  // }
}
