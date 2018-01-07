import {
  NETWORK__ADD,
  NETWORK__REMOVE,
  NETWORK__NAME,
  NETWORK__LINK
} from './actionTypes';

export function addNetwork() {
  return {
    type: NETWORK__ADD
  };
}

export function removeNetwork(id) {
  return {
    type: NETWORK__REMOVE,
    id
  };
}

export function setNetworkName(id, text) {
  return {
    type: NETWORK__NAME,
    id,
    text
  };
}

export function setNetworkLink(id, text) {
  return {
    type: NETWORK__LINK,
    id,
    text
  };
}
