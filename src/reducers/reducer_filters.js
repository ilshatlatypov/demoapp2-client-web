import {
  SET_EMPLOYEES_BY_TASK_FILTER, EmployeesByTaskFilters,
  SET_TASKS_BY_EMPLOYEES_FILTER, TasksByEmployeesFilter,
  SET_TASKS_DATE_FILTER,
  SET_SEARCH_STRING, SET_DRAWER_OPEN, LOGOUT
} from '../actions/filters';
import {LOCATION_CHANGE} from 'react-router-redux';

const INITIAL_STATE = {
  employeesByTaskFilter: EmployeesByTaskFilters.SHOW_ALL,
  tasksByEmployeesFilter: TasksByEmployeesFilter.SHOW_ALL,
  tasksDateFilter: null,
  searchString: '',
  location: '',
  drawerOpen: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case SET_EMPLOYEES_BY_TASK_FILTER:
  	return { ...state, employeesByTaskFilter: action.payload };
  case SET_TASKS_BY_EMPLOYEES_FILTER:
  	return { ...state, tasksByEmployeesFilter: action.payload };
  case SET_TASKS_DATE_FILTER:
  	return { ...state, tasksDateFilter: action.payload };
  case SET_SEARCH_STRING:
    return { ...state, searchString: action.payload };
  case SET_DRAWER_OPEN:
    return { ...state, drawerOpen: action.payload };
  case LOCATION_CHANGE:
    return { ...state, location: action.payload, searchString: '' };
  case LOGOUT:// start fetching employees and set loading = true
  	return { ...state };

  default:
    return state;
  }
}
