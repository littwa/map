import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as Actions from './actions';
import { IDataCore, IStateData } from 'src/app/interfaces/data-core.interface';

export const INIT_STATE: IDataCore = {
  dist: null,
  role: null,
};

export const reducer = createReducer(
  INIT_STATE,
  on(Actions.dataAddSuccess, (s, a) => ({ ...s, a }))
);

export const reducers: ActionReducerMap<any> = {
  data: reducer,
};

export const getData = (state: IStateData): IDataCore => state.data;
