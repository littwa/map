import { User, Error } from '../interfaces';
import { Actions, ActionTypes } from './action';

export interface State {
  user: User;
  error: Error;
}

const INIT_STATE: State = {
  user: null,
  error: null,
};

export function reducer(state: State = INIT_STATE, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LoginRequest:
      return { ...state, user: action.payload, error: null };
    case ActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case ActionTypes.LoginFailed:
      return { ...state, error: action.payload, user: null };
    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;

//=================RGISTER===========
const INIT_STATE_RGISTER = {
  register: null,
  error: null,
};

export function reducerRegister(state = INIT_STATE_RGISTER, action: Actions) {
  switch (action.type) {
    case ActionTypes.RegisterSuccess:
      return { ...state, register: action.payload };
    case ActionTypes.RegisterFailed:
      return { ...state, register: false };
    default:
      return state;
  }
}

export const getRegister = (state) => state.register;
