import { PORTRAIT__SET } from './actionTypes';

export function setPortrait(portrait) {
  return {
    type: PORTRAIT__SET,
    portrait
  };
}
