import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuid } from 'uuid';

// Action to dispatch the type to the reducer (adds alert to the state)
export const setAlert = (msg, alertType) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};
