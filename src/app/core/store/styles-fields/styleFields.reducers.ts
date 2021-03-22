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
      console.log('action.payload---', action.payload);
      console.log('state---', state);
      let newState = [...state].map((el) => {
        if (el[0] === action.payload.nameInput) {
          console.log(el);
          // el[1] = action.payload.data;
          return [el[0], action.payload.data];
        }
        return el;
      });
      console.log('newState--', newState);

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
