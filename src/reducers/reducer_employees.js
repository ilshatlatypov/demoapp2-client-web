import {
	REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAILURE,
	REQUEST_EMPLOYEE, REQUEST_EMPLOYEE_SUCCESS, REQUEST_EMPLOYEE_FAILURE, RESET_EMPLOYEE,
	OPEN_EMPLOYEE_DIALOG, CLOSE_EMPLOYEE_DIALOG,
	OPEN_DELETE_DIALOG, CLOSE_DELETE_DIALOG,
	REQUEST_DELETE_EMPLOYEE, REQUEST_DELETE_EMPLOYEE_SUCCESS, REQUEST_DELETE_EMPLOYEE_FAILURE
} from '../actions/employees';

const INITIAL_STATE = {
	employeesList: {employees: [], error: null, loading: false},
	employeeSingle: {employee: null, error: null, loading: false},
	newEmployee: {dialogOpen: false},
	deleteEmployeeDialog: { open: false, employee: null },
	deleteEmployee: { deleting: false, error: null }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

  case REQUEST_EMPLOYEES:
  	return { ...state, employeesList: {employees:[], error: null, loading: true} };
  case REQUEST_EMPLOYEES_SUCCESS:
    return { ...state, employeesList: {employees: action.payload, error:null, loading: false} };
  case REQUEST_EMPLOYEES_FAILURE:
    return { ...state, employeesList: {employees: [], error: action.payload, loading: false} };

	case REQUEST_EMPLOYEE:
		return {...state, employeeSingle: {employee: null, error: null, loading: true}};
	case REQUEST_EMPLOYEE_SUCCESS:
		return {...state, employeeSingle: {employee: action.payload, error: null, loading: false}};
	case REQUEST_EMPLOYEE_FAILURE:
		return {...state, employeeSingle: {employee: null, error: action.payload, loading: false}};
	case RESET_EMPLOYEE:
		return {...state, employeeSingle: {employee: null, error: null, loading: false}};

	case OPEN_EMPLOYEE_DIALOG:
		return {...state, newEmployee: {dialogOpen: true}};
	case CLOSE_EMPLOYEE_DIALOG:
		return {...state, newEmployee: {dialogOpen: false}};

	case OPEN_DELETE_DIALOG:
		return { ...state, deleteEmployeeDialog: { open: true, employee: action.payload } };
	case CLOSE_DELETE_DIALOG:
		return { ...state, deleteEmployeeDialog: { open: false, employee: null } };

	case REQUEST_DELETE_EMPLOYEE:
  	return { ...state, deleteEmployee: { error: null, deleting: true } };
  case REQUEST_DELETE_EMPLOYEE_SUCCESS:
    return { ...state, deleteEmployee: { error: null, deleting: false } };
  case REQUEST_DELETE_EMPLOYEE_FAILURE:
    return { ...state, deleteEmployee: { error: action.payload.message, deleting: false} };

  default:
    return state;
  }
}
