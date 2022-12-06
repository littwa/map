import { createSelector } from 'reselect';
import { AppState } from 'src/app/core/interfaces/core.interfaces';

export const coreSelector = (state: AppState) => state.core;

export const getDataSelector = createSelector(coreSelector, (state) => state.data);
export const getCustomDataSelector = createSelector(coreSelector, (state) => state.customData);
