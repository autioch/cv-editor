import { HEADER__NAME, HEADER__TITLE } from './actionTypes';

const defaultState = {
  name: '',
  title: ''
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case HEADER__NAME:
      return {
        ...state,
        name: action.text
      };
    case HEADER__TITLE:
      return {
        ...state,
        title: action.text
      };
    default:
      return state;
  }
}
