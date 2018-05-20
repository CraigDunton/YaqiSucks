import { combineReducers } from 'redux';
import nav from './nav';
import login from './login';

export default combineReducers({
  nav,
  login,
});
