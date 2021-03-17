import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RegisterAction } from '../core/store/action';
import { State, getUser } from '../core/store/index';
import { User } from '../core/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss'],
})
export class RegisterComponent {
  formRegister: FormGroup;

  // user$: Observable<User>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      agree: new FormControl(false, Validators.requiredTrue),
    });
    //=================================
    // this.user$ = this.store.select(getUser);
  }

  sub() {
    // console.log(this.formRegister.get('agree').invalid);
    this.store.dispatch(new RegisterAction(this.formRegister.value));
  }
}
