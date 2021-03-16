import { ActionStyleField, ActionStyle } from './styleFields.actions';

const INIT_STATE_STYLE = {
  input: null,
  textarea: null,
  select: null,
  checkbox: null,
  button: null,
};

export const reduserStyle = (state = INIT_STATE_STYLE, action: ActionStyle) => {
  switch (action.type) {
    case ActionStyleField.AddStyle:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const getStyle = (state) => state.style;
