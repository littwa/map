import { createAction, props } from '@ngrx/store';

export const DATA_GET_REQUEST = '[DATA] Get Request';
export const DATA_GET_SUCCESS = '[DATA] Get Success';
export const DATA_GET_ERROR = '[DATA] Get Error';

export const dataGetRequest = createAction(DATA_GET_REQUEST);
export const dataGetSuccess = createAction(DATA_GET_SUCCESS, props<{ payload: any }>());
export const dataGetError = createAction(DATA_GET_ERROR, props<{ err: any }>());

export const CUSTOM_DATA_GET_REQUEST = '[CUSTOM_DATA] Get Request';
export const CUSTOM_DATA_GET_SUCCESS = '[CUSTOM_DATA] Get Success';
export const CUSTOM_DATA_GET_ERROR = '[CUSTOM_DATA] Get Error';

export const customDataGetRequest = createAction(CUSTOM_DATA_GET_REQUEST);
export const customDataGetSuccess = createAction(CUSTOM_DATA_GET_SUCCESS, props<{ payload: any }>());
export const customDataGetError = createAction(CUSTOM_DATA_GET_ERROR, props<{ err: any }>());
