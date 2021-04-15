import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterAction } from '../../core/store/action';
import { State, getUser, getReg } from '../../core/store/index';
import { User } from '../../core/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss'],
})
export class RegisterComponent {
  isInvalid: boolean = false;
  formRegister: FormGroup;

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl(''),
      agree: new FormControl(false, Validators.requiredTrue),
    });
  }

  sub() {
    this.isInvalid = false;

    if (this.formRegister.valid) {
      this.store.dispatch(new RegisterAction(this.formRegister.value));
      let register$ = this.store.select(getReg);

      register$.subscribe((v) => {
        if (v) {
          this.router.navigate([''], { queryParams: { reg: true } });
        }
      });
    }
    if (!this.formRegister.valid) {
      this.isInvalid = true;
    }
  }
}
