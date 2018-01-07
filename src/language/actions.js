import {
  LANGUAGE__ADD,
  LANGUAGE__REMOVE,
  LANGUAGE__NAME,
  LANGUAGE__PROFICIENCY
} from './actionTypes';

export function addLanguage() {
  return {
    type: LANGUAGE__ADD
  };
}

export function removeLanguage(id) {
  return {
    type: LANGUAGE__REMOVE,
    id
  };
}

export function setLanguageName(id, text) {
  return {
    type: LANGUAGE__NAME,
    id,
    text
  };
}

export function setLanguageProficiency(id, text) {
  return {
    type: LANGUAGE__PROFICIENCY,
    id,
    text
  };
}
