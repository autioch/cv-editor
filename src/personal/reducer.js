import {
  PERSONAL__ADD,
  PERSONAL__REMOVE,
  PERSONAL__NAME,
  PERSONAL__TEXT
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case PERSONAL__ADD:
      return state.concat({
        id: state.length + 1,
        name: '',
        text: ''
      });
    case PERSONAL__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case PERSONAL__NAME:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          name: action.text,
          ...item
        };
      });
    case PERSONAL__TEXT:
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
