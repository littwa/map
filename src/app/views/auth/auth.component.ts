import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoginAction } from '../../core/store/action';
import { State, getUser } from '../../core/store/index';
import { User } from '../../core/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
})
export class AuthPageComponent {
  form: FormGroup;
  iRegisterNow: boolean;
  user$: Observable<User>;

  constructor(
    private store: Store<State>,
    private router: Router,
    private activRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let u = this.activRoute.queryParams;
    u.subscribe((v) => {
      this.iRegisterNow = !!v.reg;
    });

    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.user$ = this.store.select(getUser);
    this.user$.subscribe((v) => {
      if (v && v.token) {
        console.log('Logined!!');
        this.router.navigate(['sdk']);
      }
    });
  }

  sub() {
    this.store.dispatch(new LoginAction(this.form.value));
  }
}
