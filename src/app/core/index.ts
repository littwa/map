
import { createSelector } from 'reselect';

import * as dataReducers from './data/reducers';
export const getEnv = (state) => state.env;
export const getCatalog = createSelector(getEnv, dataReducers.getData);

