import axiosInstance from './axiosInstance';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const REQUEST_TASKS_SUCCESS = 'REQUEST_TASKS_SUCCESS';
export const REQUEST_TASKS_FAILURE = 'REQUEST_TASKS_FAILURE';

export const OPEN_TASK_DIALOG = 'OPEN_TASK_DIALOG';
export const CLOSE_TASK_DIALOG = 'CLOSE_TASK_DIALOG';
export const SET_TASK_DIALOG_SUBMITTING = 'SET_TASK_DIALOG_SUBMITTING';

export const CREATE_TASK = 'CREATE_TASK';

export const OPEN_DELETE_DIALOG = 'OPEN_DELETE_DIALOG';
export const CLOSE_DELETE_DIALOG = 'CLOSE_DELETE_DIALOG';

export const DELETE_TASK = 'DELETE_TASK';
export const REQUEST_DELETE_TASK = 'REQUEST_DELETE_TASK';
export const REQUEST_DELETE_TASK_SUCCESS = 'REQUEST_DELETE_TASK_SUCCESS';
export const REQUEST_DELETE_TASK_FAILURE = 'REQUEST_DELETE_TASK_FAILURE';

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

export function setTaskDialogSubmitting(submitting) {
  return {
    type: SET_TASK_DIALOG_SUBMITTING,
    payload: submitting
  }
}

export function createTask(props) {
  const request = axiosInstance.post('/rest/tasks', props);
  return {
    type: CREATE_TASK,
    payload: request
  };
}



export function openDeleteDialog(task) {
  return {
    type: OPEN_DELETE_DIALOG,
    payload: task,
  }
}

export function closeDeleteDialog() {
  return { type: CLOSE_DELETE_DIALOG }
}



export function requestDeleteTask() {
  return { type: REQUEST_DELETE_TASK };
}

export function requestDeleteTaskSuccess() {
  return { type: REQUEST_DELETE_TASK_SUCCESS };
}

export function requestDeleteTaskFailure(error) {
  return {
    type: REQUEST_DELETE_TASK_FAILURE,
    payload: error
  };
}

export function deleteTask(id) {
  const request = axiosInstance.delete('/rest/tasks/' + id);
  return {
    type: DELETE_TASK,
    payload: request
  };
}
