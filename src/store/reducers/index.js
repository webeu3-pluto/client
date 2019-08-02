import { combineReducers } from 'redux';
import authReducer from './authReducer';
import peopleReducer from './peopleReducer';
import quizReducer from './quizReducer';

export default combineReducers({
  auth: authReducer,
  people: peopleReducer,
  quiz: quizReducer
})