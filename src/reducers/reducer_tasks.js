import {
	REQUEST_TASKS, REQUEST_TASKS_SUCCESS, REQUEST_TASKS_FAILURE,
	OPEN_TASK_DIALOG, CLOSE_TASK_DIALOG
} from '../actions/tasks';

const INITIAL_STATE = {
	tasksList: { tasks: [], error: null, loading: false },
	dialogOpen: false
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

  default:
    return state;
  }
}
