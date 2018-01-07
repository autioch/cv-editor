import {
  PERSONAL__ADD,
  PERSONAL__REMOVE,
  PERSONAL__NAME,
  PERSONAL__TEXT
} from './actionTypes';

export function addPersonal() {
  return {
    type: PERSONAL__ADD
  };
}

export function removePersonal(id) {
  return {
    type: PERSONAL__REMOVE,
    id
  };
}

export function setPersonalName(id, text) {
  return {
    type: PERSONAL__NAME,
    id,
    text
  };
}

export function setPersonalText(id, text) {
  return {
    type: PERSONAL__TEXT,
    id,
    text
  };
}
