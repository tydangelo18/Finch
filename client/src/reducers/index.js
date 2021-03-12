import { combineReducers } from 'redux';
// import authReducer from './authReducers';
// import errorReducer from './errorReducers';
import alert from './alert';

// Contains all reducers created
export default combineReducers({
  // auth: authReducer,
  // errors: errorReducer,
  alert,
});
