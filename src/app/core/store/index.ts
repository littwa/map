// import { Params } from '@angular/router';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCore from './core.reducer';
import * as fromFields from './fields/fields.reducers';
import * as fromStyle from './styles-fields/styleFields.reducers';

export interface State {
  core: fromCore.State;
  fieldsInput: any;
  styleInput: any;
}

// Map of the reducers

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
  fieldsInput: fromFields.reducerFields,
  styleInput: fromStyle.reduserStyle,
};

//Selectors returns smaller piece of state out of the root state

export const getCoreState = (state: State) => state.core;
export const getFieldsState = (state: State) => state.fieldsInput;
export const getStyleState = (state: State) => state.styleInput;
// Selectors from Core module

export const getUser = createSelector(getCoreState, fromCore.getUser);
export const getFields = createSelector(getFieldsState, fromFields.getFields);
export const getStyle = createSelector(getStyleState, fromStyle.getStyle);
