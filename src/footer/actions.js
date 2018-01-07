import {
  FOOTER__SET
} from './actionTypes';

export function setFooter(text) {
  return {
    type: FOOTER__SET,
    text
  };
}
