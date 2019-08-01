import { combineReducers } from 'redux';
import authReducer from './authReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
  auth: authReducer,
  people: peopleReducer
})