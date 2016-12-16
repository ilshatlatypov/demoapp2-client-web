import {
	REQUEST_TASKS, REQUEST_TASKS_SUCCESS, REQUEST_TASKS_FAILURE,
	OPEN_TASK_DIALOG, CLOSE_TASK_DIALOG,
	OPEN_DELETE_DIALOG, CLOSE_DELETE_DIALOG
} from '../actions/tasks';

const INITIAL_STATE = {
	tasksList: { tasks: [], error: null, loading: false },
	dialogOpen: false,
	deleteTask: {dialogOpen: false, id: null, title: null}
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
		return { ...state, dialogOpen: true };
	case CLOSE_TASK_DIALOG:
		return { ...state, dialogOpen: false };

	case OPEN_DELETE_DIALOG:
		const task = action.payload;
		return {...state, deleteTask: {dialogOpen: true, id: task.id, title: task.title}};
	case CLOSE_DELETE_DIALOG:
		return {...state, deleteTask: {dialogOpen: false, id: null, title: null}};

  default:
    return state;
  }
}
