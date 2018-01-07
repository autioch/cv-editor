import {
  LANGUAGE__ADD,
  LANGUAGE__REMOVE,
  LANGUAGE__NAME,
  LANGUAGE__PROFICIENCY
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case LANGUAGE__ADD:
      return state.concat({
        id: state.length + 1,
        name: '',
        proficiency: ''
      });
    case LANGUAGE__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case LANGUAGE__NAME:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          name: action.text,
          ...item
        };
      });
    case LANGUAGE__PROFICIENCY:
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
