import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as Actions from 'src/app/core/data/data.actions';
import { ICoreState, IDataState } from 'src/app/core/interfaces/core.interfaces';

export const INIT_STATE: IDataState = {
  type: null,
  features: null,
};

export const dataReducer = createReducer(
  INIT_STATE,
  on(Actions.dataGetSuccess, (state, action) => ({ ...state, ...action.payload }))
);

export const customDataReducer = createReducer(
  INIT_STATE,
  on(Actions.customDataGetSuccess, (state, action) => ({ ...state, ...action.payload }))
);

export const reducers: ActionReducerMap<ICoreState> = {
  data: dataReducer,
  customData: customDataReducer,
};

