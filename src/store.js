import { combineReducers, createStore } from 'redux';

import education from './education/reducer';
import employment from './employment/reducer';
import header from './header/reducer';
import interest from './interest/reducer';
import language from './language/reducer';
import network from './network/reducer';
import personal from './personal/reducer';
import technology from './technology/reducer';
import tool from './tool/reducer';
import trait from './trait/reducer';
import footer from './footer/reducer';
import portrait from './portrait/reducer';

export default createStore(combineReducers({
  portrait,
  education,
  employment,
  header,
  interest,
  language,
  network,
  personal,
  technology,
  tool,
  trait,
  footer
}));
