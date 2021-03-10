import { Action } from '@ngrx/store';
import { User, Error } from '../interfaces';

export enum ActionTypes {
  LoginRequest = '[App] Login request',
  LoginSuccess = '[App] Login success',
  LoginFailed = '[App] Login failed',
}

export class LoginAction implements Action {
  readonly type = ActionTypes.LoginRequest;
  constructor(public payload: User) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LoginSuccess;

  constructor(public payload: User) {}
}

export class LoginFailedAction implements Action {
  readonly type = ActionTypes.LoginFailed;

  constructor(public payload: Error) {}
}

export type Actions = LoginAction | LoginSuccessAction | LoginFailedAction;
