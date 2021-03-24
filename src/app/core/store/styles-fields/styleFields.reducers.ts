import { ActionStyleField, ActionStyle } from './styleFields.actions';

const INIT_STATE_STYLE_UPDATE = [];

export const reduserStyle = (
  state = INIT_STATE_STYLE_UPDATE,
  action: ActionStyle
) => {
  switch (action.type) {
    case ActionStyleField.AddStyle:
      return [...state, action.payload];

    case ActionStyleField.ChangeStyle:
      let newState = [...state].map((el) => {
        if (el[0] === action.payload.nameInput) {
          if (action.payload.nameInput.split('-')[0] === 'select') {
            let newVal = { ...action.payload.currentValue };

            let sel = [...el[2].select];

            if (!action.payload.currentValue.select[0]) {
              newVal.select = sel;
              return [el[0], action.payload.data, newVal];
            }

            sel.push(action.payload.currentValue.select);

            if (action.payload.currentValue.select[0]) {
              newVal.select = sel;
            }

            return [el[0], action.payload.data, newVal];
          }

          return [el[0], action.payload.data, action.payload.currentValue];
        }
        return el;
      });

      return newState;

    case ActionStyleField.RemoveStyle:
      // console.log('action.payload--', action.payload);

      let withoutFieldState = [...state].filter(
        (el) => el[0] !== action.payload
      );
      console.log('state--', withoutFieldState);
      return withoutFieldState;
    default:
      return state;
  }
};

export const getStyle = (state) => state;
