import { Component } from '@angular/core';
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
  form: FormGroup;

  user$: Observable<User>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.user$ = this.store.select(getUser);
  }

  sub() {
    this.store.dispatch(new LoginAction(this.form.value));
  }
}
