import axiosInstance from './axiosInstance';

export const REQUEST_PROFILE = 'REQUEST_PROFILE';
export const REQUEST_PROFILE_SUCCESS = 'REQUEST_PROFILE_SUCCESS';
export const REQUEST_PROFILE_FAILURE = 'REQUEST_PROFILE_FAILURE';

export function requestProfile() {
  return { type: REQUEST_PROFILE };
}

export function requestProfileSuccess(profile) {
  return {
    type: REQUEST_PROFILE_SUCCESS,
    payload: profile
  };
}

export function requestProfileFailure(error) {
  return {
    type: REQUEST_PROFILE_FAILURE,
    payload: error
  };
}

export function fetchProfile() {
  return function(dispatch) {
		dispatch(requestProfile());
		return axiosInstance.get('/rest/employees/profile')
			.then(function(response) {
				dispatch(requestProfileSuccess(response.data));
			})
			.catch(function(error) {
        error = error.response ? error.response.data : error;
				dispatch(requestProfileFailure(error));
			})
	}
}
