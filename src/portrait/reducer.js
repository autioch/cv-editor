import {
  PORTRAIT__SET
} from './actionTypes';

import portrait from './view/photo.jpg';

export default function reducer(state = portrait, action) {
  switch (action.type) {
    case PORTRAIT__SET:
      return action.portrait;
    default:
      return state;
  }
}
