import {
	FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, RESET_TASKS
} from '../actions/tasks';

const INITIAL_STATE = { tasksList: {tasks: [], error:null, loading: false} };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_TASKS:// start fetching tasks and set loading = true
  	return { ...state, tasksList: {tasks:[], error: null, loading: true} };
  case FETCH_TASKS_SUCCESS:// return list of tasks and make loading = false
		return { ...state, tasksList: {tasks: action.payload.data._embedded.tasks, error:null, loading: false} };
  case FETCH_TASKS_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, tasksList: {tasks: [], error: error, loading: false} };
  case RESET_TASKS:// reset taskList to initial state
    return { ...state, tasksList: {tasks: [], error:null, loading: false} };

  default:
    return state;
  }
}
