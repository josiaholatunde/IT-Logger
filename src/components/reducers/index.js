import { combineReducers } from 'redux';
import logsReducer from './logsReducer';
import techReducer from './techsReducer';

export default combineReducers({
  log: logsReducer,
  tech:  techReducer
})