import {
  TOOL__ADD,
  TOOL__REMOVE,
  TOOL__NAME,
  TOOL__PROFICIENCY
} from './actionTypes';

export function addTool() {
  return {
    type: TOOL__ADD
  };
}

export function removeTool(id) {
  return {
    type: TOOL__REMOVE,
    id
  };
}

export function setToolName(id, text) {
  return {
    type: TOOL__NAME,
    id,
    text
  };
}

export function setToolProficiency(id, proficiency) {
  return {
    type: TOOL__PROFICIENCY,
    id,
    proficiency
  };
}
