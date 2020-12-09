import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from '../actions/types';

//Register User
export const registerUser = (newUser, history) => (dispatch) => {
  //Header
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify(newUser);
  console.log('body: ', body);
  axios
    .post('http://localhost:8000/api/users/register', body, config)
    .then((res) => history.push('/')) //re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login - get user token

export const loginUser = (newUser, history) => (dispatch) => {
  //Header
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify(newUser);
  console.log('body:', body);
  axios
    .post('http://localhost:8000/api/users/login', body, config)
    .then((res) => {
      //save to local storage

      //Set token to localStorage
      const { token } = res.data;

      localStorage.setItem('jwtToken', token);
      //Set auth to header
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

//User Loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

//Log user out

export const logoutUser = () => (dispatch) => {
  //Remove token from local storage
  localStorage.removeItem('jwtToken');
  //Remove auth header to future requests
  setAuthToken(false);
  //Set current user to empty object {} setting isAuthenticated to false
  dispatch(setCurrentUser({}));
};

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
