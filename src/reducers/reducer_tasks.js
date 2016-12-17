import {
	REQUEST_TASKS, REQUEST_TASKS_SUCCESS, REQUEST_TASKS_FAILURE,
	OPEN_TASK_DIALOG, CLOSE_TASK_DIALOG, SET_TASK_DIALOG_SUBMITTING,
	OPEN_DELETE_DIALOG, CLOSE_DELETE_DIALOG,
	REQUEST_DELETE_TASK, REQUEST_DELETE_TASK_SUCCESS, REQUEST_DELETE_TASK_FAILURE
} from '../actions/tasks';

const INITIAL_STATE = {
	tasksList: { tasks: [], error: null, loading: false },
	taskDialog: { open: false, submitting: false },
	deleteTaskDialog: { open: false, task: null },
	deleteTask: { deleting: false, error: null }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case REQUEST_TASKS:
  	return { ...state, tasksList: {tasks:[], error: null, loading: true} };
  case REQUEST_TASKS_SUCCESS:
    return { ...state, tasksList: {tasks: action.payload, error:null, loading: false} };
  case REQUEST_TASKS_FAILURE:
    return { ...state, tasksList: {tasks: [], error: action.payload, loading: false} };

	case OPEN_TASK_DIALOG:
		return { ...state, taskDialog: { ...state.taskDialog, open: true } };
	case CLOSE_TASK_DIALOG:
		return { ...state, taskDialog: { ...state.taskDialog, open: false } };
	case SET_TASK_DIALOG_SUBMITTING:
		return { ...state, taskDialog: { ...state.taskDialog, submitting: action.payload } };

	case OPEN_DELETE_DIALOG:
		return { ...state, deleteTaskDialog: { open: true, task: action.payload } };
	case CLOSE_DELETE_DIALOG:
		return { ...state, deleteTaskDialog: { open: false, task: null } };

	case REQUEST_DELETE_TASK:
  	return { ...state, deleteTask: { error: null, deleting: true } };
  case REQUEST_DELETE_TASK_SUCCESS:
    return { ...state, deleteTask: { error: null, deleting: false } };
  case REQUEST_DELETE_TASK_FAILURE:
    return { ...state, deleteTask: { error: action.payload.message, deleting: false} };

  default:
    return state;
  }
}
