import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';
import matching from './matching';

export default combineReducers({
  nav,
  login,
  matching,
});
