import {
  TOOL__ADD,
  TOOL__REMOVE,
  TOOL__NAME,
  TOOL__PROFICIENCY
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case TOOL__ADD:
      return state.concat({
        id: state.length + 1,
        name: '',
        proficiency: ''
      });
    case TOOL__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case TOOL__NAME:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          name: action.text,
          ...item
        };
      });
    case TOOL__PROFICIENCY:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          proficiency: action.text,
          ...item
        };
      });
    default:
      return state;
  }
}
