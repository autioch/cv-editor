import {
  FOOTER__SET
} from './actionTypes';

const defaultFooter = `I hereby give consent for my personal data included in my application
  to be processed for the purposes of the recruitment process under the Personal Data
  Protection Act as of 29 August 1997, consolidated text: Journal of Laws 2016, item 922 as amended.`;

export default function reducer(state = defaultFooter, action) {
  switch (action.type) {
    case FOOTER__SET:
      return action.text;
    default:
      return state;
  }
}
