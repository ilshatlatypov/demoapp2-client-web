import {
	REQUEST_PROFILE, REQUEST_PROFILE_SUCCESS, REQUEST_PROFILE_FAILURE
} from '../actions/profile';

const INITIAL_STATE = {
	pageContent: {profile: null, error: null, loading: false},
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case REQUEST_PROFILE:
  	return { ...state, pageContent: {profile: null, error: null, loading: true} };
  case REQUEST_PROFILE_SUCCESS:
    return { ...state, pageContent: {profile: action.payload, error: null, loading: false} };
  case REQUEST_PROFILE_FAILURE:
    return { ...state, pageContent: {profile: null, error: action.payload, loading: false} };

  default:
    return state;
  }
}
