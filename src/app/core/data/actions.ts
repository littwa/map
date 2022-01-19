import { createAction, props } from '@ngrx/store';

export const DATA_ADD_REQUEST = '[DATA] Add Request';
export const DATA_ADD_SUCCESS = '[DATA] Add Success';
export const DATA_ADD_ERROR = '[DATA] Add Error';

export const dataAddRequest = createAction(DATA_ADD_REQUEST, props<{ payload: any }>());
export const dataAddSuccess = createAction(DATA_ADD_SUCCESS, props<{ payload: any }>());
export const dataAddError = createAction(DATA_ADD_ERROR, props<{ err: any }>());
