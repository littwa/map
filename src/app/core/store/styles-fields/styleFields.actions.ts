import { Action } from '@ngrx/store';

export enum ActionStyleField {
  AddStyle = '[Style] add',
  GetStyle = '[Style] get',
  RemoveStyle = '[Style] remove',
  ClearStyle = '[Style] clear',
}

export class AddStyleAction implements Action {
  readonly type = ActionStyleField.AddStyle;
  constructor(public payload: any) {}
}

export class GetStyleAction implements Action {
  readonly type = ActionStyleField.GetStyle;
  constructor(public payloa: any) {}
}

export class RemoveStyleAction implements Action {
  readonly type = ActionStyleField.RemoveStyle;
  constructor(public payloa: any) {}
}

export class ClearStyleAction implements Action {
  readonly type = ActionStyleField.ClearStyle;
  constructor(public payloa: any) {}
}

export type ActionStyle =
  | AddStyleAction
  | GetStyleAction
  | RemoveStyleAction
  | ClearStyleAction;
