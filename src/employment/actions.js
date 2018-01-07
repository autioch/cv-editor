import {
  EMPLOYMENT__ADD,
  EMPLOYMENT__REMOVE,
  EMPLOYMENT__START_DATE,
  EMPLOYMENT__END_DATE,
  EMPLOYMENT__COMPANY,
  EMPLOYMENT__POSITION,
  EMPLOYMENT__TOOLS,
  EMPLOYMENT__SUMMARY
} from './actionTypes';

export function addEmployment() {
  return {
    type: EMPLOYMENT__ADD
  };
}

export function removeEmployment(id) {
  return {
    type: EMPLOYMENT__REMOVE,
    id
  };
}

export function setEmploymentStartDate(id, date) {
  return {
    type: EMPLOYMENT__START_DATE,
    id,
    date
  };
}

export function setEmploymentEndDate(id, date) {
  return {
    type: EMPLOYMENT__END_DATE,
    id,
    date
  };
}

export function setEmploymentCompany(id, text) {
  return {
    type: EMPLOYMENT__COMPANY,
    id,
    text
  };
}

export function setEmploymentPosition(id, text) {
  return {
    type: EMPLOYMENT__POSITION,
    id,
    text
  };
}

export function setEmploymentTools(id, text) {
  return {
    type: EMPLOYMENT__TOOLS,
    id,
    text
  };
}

export function setEmploymentSummary(id, text) {
  return {
    type: EMPLOYMENT__SUMMARY,
    id,
    text
  };
}
