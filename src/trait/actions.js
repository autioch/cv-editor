import {
  TRAIT__ADD,
  TRAIT__REMOVE,
  TRAIT__TEXT
} from './actionTypes';

export function addTrait() {
  return {
    type: TRAIT__ADD
  };
}

export function removeTrait(id) {
  return {
    type: TRAIT__REMOVE,
    id
  };
}

export function setTraitText(id, text) {
  return {
    type: TRAIT__TEXT,
    id,
    text
  };
}
