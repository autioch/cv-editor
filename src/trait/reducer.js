import {
  TRAIT__ADD,
  TRAIT__REMOVE,
  TRAIT__TEXT
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case TRAIT__ADD:
      return state.concat({
        id: state.length + 1,
        text: ''
      });
    case TRAIT__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case TRAIT__TEXT:
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
