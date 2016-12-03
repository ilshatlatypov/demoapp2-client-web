import { SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions/common';

const INITIAL_STATE = { snackbar: { open: false, message: '' } };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case SHOW_SNACKBAR:
  	return { ...state, snackbar: { open: true, message: action.payload } };
  case HIDE_SNACKBAR:
    return { ...state, snackbar: { open: false, message: '' } };

  default:
    return state;
  }
}
