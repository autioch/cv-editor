import {
  NETWORK__ADD,
  NETWORK__REMOVE,
  NETWORK__NAME,
  NETWORK__LINK
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case NETWORK__ADD:
      return state.concat({
        id: state.length + 1,
        name: '',
        link: ''
      });
    case NETWORK__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case NETWORK__NAME:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          name: action.text,
          ...item
        };
      });
    case NETWORK__LINK:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          link: action.text,
          ...item
        };
      });
    default:
      return state;
  }
}
