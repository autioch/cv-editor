import {
  TECHNOLOGY__ADD,
  TECHNOLOGY__REMOVE,
  TECHNOLOGY__NAME,
  TECHNOLOGY__PROFICIENCY
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case TECHNOLOGY__ADD:
      return state.concat({
        id: state.length + 1,
        name: '',
        proficiency: ''
      });
    case TECHNOLOGY__REMOVE:
      return state.filter((item) => item.id !== action.id);
    case TECHNOLOGY__NAME:
      return state.map((item) => {
        if (item.id !== action.id) {
          return item;
        }

        return {
          name: action.text,
          ...item
        };
      });
    case TECHNOLOGY__PROFICIENCY:
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
