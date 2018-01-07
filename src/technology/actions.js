import {
  TECHNOLOGY__ADD,
  TECHNOLOGY__REMOVE,
  TECHNOLOGY__NAME,
  TECHNOLOGY__PROFICIENCY
} from './actionTypes';

export function addTechnology() {
  return {
    type: TECHNOLOGY__ADD
  };
}

export function removeTechnology(id) {
  return {
    type: TECHNOLOGY__REMOVE,
    id
  };
}

export function setTechnologyName(id, text) {
  return {
    type: TECHNOLOGY__NAME,
    id,
    text
  };
}

export function setTechnologyProficiency(id, text) {
  return {
    type: TECHNOLOGY__PROFICIENCY,
    id,
    text
  };
}
