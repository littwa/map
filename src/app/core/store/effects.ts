import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap, filter, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// let jwt = require('jsonwebtoken');
// import { encode } from 'jwt-encode';
// import { sign, verify } from 'jsonwebtoken';
// let f = encode('payload', 'secret');

import * as jwtEncode from 'jwt-encode';

import { User } from '../interfaces';
import {
  ActionTypes,
  LoginAction,
  LoginSuccessAction,
  LoginFailedAction,
  RegisterSuccessAction,
} from '../store/action';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private http: HttpClient) {}
  // onLogin$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(ActionTypes.LoginRequest),
  //     map((action: any) => action.payload),
  //     switchMap((action: User) => of(new LoginSuccessAction(action)))
  //   )
  // );
  //===========
  onLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoginRequest),
      map((action: any) => action.payload),
      // tap((v) => this.http.get('http://localhost:3000/users')),
      switchMap((action: any) => {
        // let d = this.http.get(
        //   `http://localhost:3000/users?email=${action.email}`
        // );
        // d.subscribe((v) => console.log(111, v));
        // console.log(3434, action);

        return this.http.get(
          `http://localhost:3000/users?email=${action.email}`
        );

        // return of(new LoginSuccessAction(action));
      }),
      mergeMap((current: any) => {
        // console.log(1212212, current);
        // let str$ = from('123');
        // str$.subscribe((v) => console.log(v));
        if (!current[0]) {
          return of(
            new LoginFailedAction({
              code: 404,
              message: 'Invalid login',
            })
          );
        }

        let token = jwtEncode(current[0], 'sekret');

        // console.log(1, token);

        return of(new LoginSuccessAction(current[0]));
      })
    )
  );

  $onRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.RegisterRequest),
      map((action: any) => action.payload),
      switchMap((v) => {
        return this.http.post('http://localhost:3000/users', v);
        // return of(new RegisterSuccessAction(true));
      }),
      mergeMap((v) => {
        return of(new RegisterSuccessAction(v));
      })
      // tap(v=>of(new RegisterSuccessAction(true))
    )
  );
}
// map((action: any) => action.payload)
// switchMap((action: User) => of(new LoginSuccessAction(action)))
// this.http.get('http://localhost:3000/users')

// ,
//       switchMap((action: User) => {
//         console.log(22, action);
//         return of(new LoginSuccessAction(action));
//       })

//?email=${action.email}
