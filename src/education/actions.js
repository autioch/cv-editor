import {
  EDUCATION__ADD,
  EDUCATION__REMOVE,
  EDUCATION__START_DATE,
  EDUCATION__END_DATE,
  EDUCATION__INSTITUTION,
  EDUCATION__COUNTRY,
  EDUCATION__CITY
} from './actionTypes';

export function addEducation() {
  return {
    type: EDUCATION__ADD
  };
}

export function removeEducation(id) {
  return {
    type: EDUCATION__REMOVE,
    id
  };
}

export function setEducationStartDate(id, text) {
  return {
    type: EDUCATION__START_DATE,
    id,
    text
  };
}

export function setEducationEndDate(id, text) {
  return {
    type: EDUCATION__END_DATE,
    id,
    text
  };
}

export function setEducationInstitiution(id, text) {
  return {
    type: EDUCATION__INSTITUTION,
    id,
    text
  };
}

export function setEducationCountry(id, text) {
  return {
    type: EDUCATION__COUNTRY,
    id,
    text
  };
}

export function setEducationCity(id, text) {
  return {
    type: EDUCATION__CITY,
    id,
    text
  };
}
