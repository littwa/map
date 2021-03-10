// import { Params } from '@angular/router';
import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCore from './core.reducer';

export const metaReducers: MetaReducer<any, any>[] = !environment.production
  ? []
  : [];

export interface State {
  core: fromCore.State;
}

// export interface RouterStateUrl {
//   url: string;
//   queryParams: Params;
// }

// Map of the reducers

export const reducers: ActionReducerMap<State> = {
  core: fromCore.reducer,
};

//Selectors returns smaller piece of state out of the root state

export const getCoreState = (state: State) => state.core;

// Selectors from Core module

export const getUser = createSelector(getCoreState, fromCore.getUser);

// export const getUser = (state: State) => state.user;
