import axiosInstance from './axiosInstance';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const REQUEST_TASKS_SUCCESS = 'REQUEST_TASKS_SUCCESS';
export const REQUEST_TASKS_FAILURE = 'REQUEST_TASKS_FAILURE';

export function requestTasks() {
  return { type: REQUEST_TASKS };
}

export function requestTasksSuccess(tasks) {
  return {
    type: REQUEST_TASKS_SUCCESS,
    payload: tasks
  };
}

export function requestTasksFailure(error) {
  return {
    type: REQUEST_TASKS_FAILURE,
    payload: error
  };
}

export function fetchTasks() {
  return function(dispatch) {
		dispatch(requestTasks());
		return axiosInstance.get('/tasks')
			.then(function(response) {
				dispatch(requestTasksSuccess(response.data._embedded.tasks));
			})
			.catch(function(error) {
        error = error.response ? error.response.data : error; //2nd one is network or server down errors
				dispatch(requestTasksFailure(error));
			})
	}
}
