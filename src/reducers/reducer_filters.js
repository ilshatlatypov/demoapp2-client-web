import {
  SET_EMPLOYEES_BY_TASK_FILTER, EmployeesByTaskFilters,
  SET_SEARCH_STRING, SET_DRAWER_OPEN, LOGOUT
} from '../actions/filters';
import {LOCATION_CHANGE} from 'react-router-redux';

const INITIAL_STATE = {
  employeesByTaskFilter: EmployeesByTaskFilters.SHOW_ALL,
  searchString: '',
  location: '',
  drawerOpen: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case SET_EMPLOYEES_BY_TASK_FILTER:
  	return { ...state, employeesByTaskFilter: action.payload };
  case SET_SEARCH_STRING:
    return { ...state, searchString: action.payload };
  case SET_DRAWER_OPEN:
    return { ...state, drawerOpen: action.payload };
  case LOCATION_CHANGE:
    return { ...state, location: action.payload };
  case LOGOUT:// start fetching employees and set loading = true
  	return { ...state };

  default:
    return state;
  }
}
