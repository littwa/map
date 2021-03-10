import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { User } from '../interfaces';
import { ActionTypes, LoginAction, LoginSuccessAction } from '../store/action';

@Injectable()
export class Effects {
  constructor(private actions$: Actions) {}
  onLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoginRequest),
      map((action: any) => action.payload),
      switchMap((action: User) => of(new LoginSuccessAction(action)))
    )
  );
}
