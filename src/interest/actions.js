import {
  INTEREST__ADD,
  INTEREST__REMOVE,
  INTEREST__TEXT
} from './actionTypes';

export function addInterest() {
  return {
    type: INTEREST__ADD
  };
}

export function removeInterest(id) {
  return {
    type: INTEREST__REMOVE,
    id
  };
}

export function setInterestText(id, text) {
  return {
    type: INTEREST__TEXT,
    id,
    text
  };
}
