import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap, mergeMap, filter, tap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthServices } from '../../shared/auth.srevices';

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
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private auth: AuthServices
  ) {}

  onLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoginRequest),
      map((action: any) => action.payload),
      switchMap((action: any) => {
        return this.auth.getUser(action);
      }),
      mergeMap((current: any) => {
        if (!current.email) {
          return of(
            new LoginFailedAction({
              code: 404,
              message: 'Invalid login',
            })
          );
        }
        return of(new LoginSuccessAction(current));
      })
    )
  );

  $onRegister = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.RegisterRequest),
      map((action: any) => action.payload),
      switchMap((s$) => {
        return this.http.post('http://localhost:3000/users', s$);
      }),
      mergeMap((s$) => {
        return of(new RegisterSuccessAction(s$));
      })
    )
  );
}
