import {
  INTEREST__ADD,
  INTEREST__REMOVE,
  INTEREST__TEXT
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case INTEREST__ADD:
      return state.concat({
        id: state.length + 1,
        text: ''
      });
    case INTEREST__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case INTEREST__TEXT:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          text: action.text,
          ...item
        };
      });
    default:
      return state;
  }
}
