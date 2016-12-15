import axiosInstance from './axiosInstance';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const REQUEST_TASKS_SUCCESS = 'REQUEST_TASKS_SUCCESS';
export const REQUEST_TASKS_FAILURE = 'REQUEST_TASKS_FAILURE';

export const OPEN_TASK_DIALOG = 'OPEN_TASK_DIALOG';
export const CLOSE_TASK_DIALOG = 'CLOSE_TASK_DIALOG';

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



export function openTaskDialog() {
  return { type: OPEN_TASK_DIALOG }
}

export function closeTaskDialog() {
  return { type: CLOSE_TASK_DIALOG }
}
