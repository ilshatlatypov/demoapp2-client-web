import axiosInstance from './axiosInstance';

export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES';
export const REQUEST_EMPLOYEES_SUCCESS = 'REQUEST_EMPLOYEES_SUCCESS';
export const REQUEST_EMPLOYEES_FAILURE = 'REQUEST_EMPLOYEES_FAILURE';

export const REQUEST_EMPLOYEE = 'REQUEST_EMPLOYEE';
export const REQUEST_EMPLOYEE_SUCCESS = 'REQUEST_EMPLOYEE_SUCCESS';
export const REQUEST_EMPLOYEE_FAILURE = 'REQUEST_EMPLOYEE_FAILURE';
export const RESET_EMPLOYEE = 'RESET_EMPLOYEE';

export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const OPEN_EMPLOYEE_DIALOG = 'OPEN_EMPLOYEE_DIALOG';
export const CLOSE_EMPLOYEE_DIALOG = 'CLOSE_EMPLOYEE_DIALOG';

export const OPEN_DELETE_DIALOG = 'OPEN_DELETE_DIALOG';
export const CLOSE_DELETE_DIALOG = 'CLOSE_DELETE_DIALOG';

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const REQUEST_DELETE_EMPLOYEE = 'REQUEST_DELETE_EMPLOYEE';
export const REQUEST_DELETE_EMPLOYEE_SUCCESS = 'REQUEST_DELETE_EMPLOYEE_SUCCESS';
export const REQUEST_DELETE_EMPLOYEE_FAILURE = 'REQUEST_DELETE_EMPLOYEE_FAILURE';

export const CHECK_USERNAME_USED = 'CHECK_USERNAME_USED';

export function requestEmployees() {
  return { type: REQUEST_EMPLOYEES };
}

export function requestEmployeesSuccess(employees) {
  return {
    type: REQUEST_EMPLOYEES_SUCCESS,
    payload: employees
  };
}

export function requestEmployeesFailure(error) {
  return {
    type: REQUEST_EMPLOYEES_FAILURE,
    payload: error
  };
}

export function fetchEmployees() {
  return function(dispatch) {
		dispatch(requestEmployees());
		return axiosInstance.get('/rest/employees')
			.then(function(response) {
				dispatch(requestEmployeesSuccess(response.data));
			})
			.catch(function(error) {
        error = error.response ? error.response.data : error; //2nd one is network or server down errors
				dispatch(requestEmployeesFailure(error));
			})
	}
}



export function requestEmployee(id) {
  return {
    type: REQUEST_EMPLOYEE
  };
}

export function requestEmployeeSuccess(employee) {
  return {
    type: REQUEST_EMPLOYEE_SUCCESS,
    payload: employee
  }
}

export function requestEmployeeFailure(error) {
  return {
    type: REQUEST_EMPLOYEE_FAILURE,
    payload: error
  };
}

export function resetEmployee() {
  return {
    type: RESET_EMPLOYEE
  }
}

export function fetchEmployee(id) {
  return function(dispatch) {
		dispatch(requestEmployee(id));
		return axiosInstance.get('/rest/employees/' + id)
			.then(function(response) {
				dispatch(requestEmployeeSuccess(response.data));
			})
			.catch(function(error) {
        error = error.response ? error.response.data : error;
				dispatch(requestEmployeeFailure(error));
			})
	}
}



export function createEmployee(props) {
  const request = axiosInstance.post('/rest/employees', props);
  return {
    type: CREATE_EMPLOYEE,
    payload: request
  };
}

export function updateEmployee(props) {
  const request = axiosInstance.put('/rest/employees/' + props.id, props);
  return {
    type: UPDATE_EMPLOYEE,
    payload: request
  };
}



export function openEmployeeDialog() {
  return { type: OPEN_EMPLOYEE_DIALOG }
}

export function closeEmployeeDialog() {
  return { type: CLOSE_EMPLOYEE_DIALOG }
}



export function openDeleteDialog(employee) {
  return {
    type: OPEN_DELETE_DIALOG,
    payload: employee,
  }
}

export function closeDeleteDialog() {
  return { type: CLOSE_DELETE_DIALOG }
}



export function requestDeleteEmployee() {
  return { type: REQUEST_DELETE_EMPLOYEE };
}

export function requestDeleteEmployeeSuccess() {
  return { type: REQUEST_DELETE_EMPLOYEE_SUCCESS };
}

export function requestDeleteEmployeeFailure(error) {
  return {
    type: REQUEST_DELETE_EMPLOYEE_FAILURE,
    payload: error
  };
}

export function deleteEmployee(id) {
  const request = axiosInstance.delete('/rest/employees/' + id);
  return {
    type: DELETE_EMPLOYEE,
    payload: request
  };
}



export function checkUsernameAvailable(username) {
  const request = axiosInstance.get('/rest/employees/isUsernameAvailable/' + username);
  return {
    type: CHECK_USERNAME_USED,
    payload: request
  }
}
