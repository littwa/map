// import { Params } from '@angular/router';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCore from './core.reducer';
import * as fromFields from './fields/fields.reducers';

export interface State {
  core: fromCore.State;
  fields: any;
}

// Map of the reducers

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
  fields: fromFields.reducerFields,
};

//Selectors returns smaller piece of state out of the root state

export const getCoreState = (state: State) => state.core;
export const getFieldsState = (state: State) => state.fields;

// Selectors from Core module

export const getUser = createSelector(getCoreState, fromCore.getUser);
export const getFields = createSelector(getFieldsState, fromFields.getFields);
