import {
	REQUEST_EMPLOYEES, REQUEST_EMPLOYEES_SUCCESS, REQUEST_EMPLOYEES_FAILURE,
	REQUEST_EMPLOYEE, REQUEST_EMPLOYEE_SUCCESS, REQUEST_EMPLOYEE_FAILURE, RESET_EMPLOYEE,
	OPEN_EMPLOYEE_DIALOG, CLOSE_EMPLOYEE_DIALOG,
	OPEN_DELETE_EMPLOYEE_DIALOG, CLOSE_DELETE_EMPLOYEE_DIALOG
} from '../actions/employees';

const INITIAL_STATE = {
	employeesList: {employees: [], error: null, loading: false},
	employeeSingle: {employee: null, error: null, loading: false},
	newEmployee: {dialogOpen: false},
	deleteEmployee: {id: null, message: '', dialogOpen: false}
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

	case OPEN_DELETE_EMPLOYEE_DIALOG:
		const employee = action.payload;
		return {...state, deleteEmployee: {id: employee.id, fullname: employee.firstname + ' ' + employee.lastname, dialogOpen: true}};
	case CLOSE_DELETE_EMPLOYEE_DIALOG:
		return {...state, deleteEmployee: {id: null, message: '', dialogOpen: false}};

  default:
    return state;
  }
}
