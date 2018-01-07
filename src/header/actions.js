import { HEADER__NAME, HEADER__TITLE } from './actionTypes';

export function setName(text) {
  return {
    type: HEADER__NAME,
    text
  };
}

export function setTitle(text) {
  return {
    type: HEADER__TITLE,
    text
  };
}
