import { ActionStyleField, ActionStyle } from './styleFields.actions';

const INIT_STATE_STYLE_UPDATE = []; //['general', {}]

// const INIT_STATE_STYLE = {
//   input: null,
//   textarea: {
//     border: '1.5px solid #888',
//     borderRadius: '20px',
//     fontSize: '12px',
//     padding: '5px 10px',
//     backgroundColor: '#fff',
//   },
//   select: null,
//   checkbox: null,
//   button: null,
//   general: {},
// };

export const reduserStyle = (
  state = INIT_STATE_STYLE_UPDATE,
  action: ActionStyle
) => {
  switch (action.type) {
    case ActionStyleField.AddStyle:
      return [...state, action.payload];

    case ActionStyleField.ChangeStyle:
      // console.log('action.payload---', action.payload);
      // console.log('state---', state);
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

            // console.log(777, sel);

            if (action.payload.currentValue.select[0]) {
              newVal.select = sel;
            }

            return [el[0], action.payload.data, newVal];
          }

          return [el[0], action.payload.data, action.payload.currentValue];
        }
        return el;
      });
      // console.log('newState--', newState);

      return newState;
    default:
      return state;
  }
};

// export const reduserStyle = (state = INIT_STATE_STYLE, action: ActionStyle) => {
//   switch (action.type) {
//     case ActionStyleField.AddStyle:
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

export const getStyle = (state) => state;
