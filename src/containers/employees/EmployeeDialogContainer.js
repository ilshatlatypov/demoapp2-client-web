import {connect} from 'react-redux';
import {reduxForm, SubmissionError, reset} from 'redux-form';
import EmployeeDialog from '../../components/employees/EmployeeDialog';
import {
  createEmployee, updateEmployee, closeEmployeeDialog, resetEmployee, fetchEmployees, checkUsernameAvailable
} from '../../actions/employees';
import {showSnackbar} from '../../actions/common';

function validate(values) {
  const errors = {};
  if (!values) {
    return errors;
  }

  if (!values.firstname || values.firstname.trim() === '') {
    errors.firstname = "Обязательное поле";
  }
  if (!values.lastname || values.lastname.trim() === '') {
    errors.lastname = "Обязательное поле";
  }

  const username = values.username;
  if (!username || username.trim() === '') {
    errors.username = "Обязательное поле";
  } else if (username.length < 3 || username.length > 20) {
    errors.username = "Минимум 3 символа, максимум 20";
  } else if (!username.match(/^[a-z]+$/)) {
    errors.username = "Только латинские буквы";
  }
  return errors;
}

const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    const isEdit = values.id;
    const isUsernameTyped = values.username && values.username.trim() !== '';
    if (isEdit || !isUsernameTyped) {
      resolve();
      return;
    }

    dispatch(checkUsernameAvailable(values.username)).then((action) => {
      const usernameAvailable = !action.error && action.payload.status === 200;
      const usernameAlreadyUsed = action.error && action.payload.response && action.payload.response.status === 409;
      const serverUnavailable = action.error && !action.payload.response;
      if (usernameAlreadyUsed) {
        reject({username: 'Такой логин уже используется'});
        return;
      }
      if (usernameAvailable) {
        resolve();
        return;
      }
      if (serverUnavailable) {
        reject({_error: action.payload.error});
        return;
      }
    });
  });
}

function getErrorsFromResponseBody(responseBody) {
  const status = responseBody.status;
  let validationErrors = {};
  if (status === 400 || status === 409) {
    const fieldErrors = responseBody.errors;
    fieldErrors.forEach(function(item) {
      validationErrors[item.field] = item.message;
    });
  } else {
    validationErrors._error = responseBody.message;
  }
  return validationErrors;
}

function attemptSaveEmployee(data, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(data.id ? updateEmployee(data) : createEmployee(data)).then((action) => {
      if (action.error) {
        const response = action.payload.response;
        const validationErrors = response ?
          getErrorsFromResponseBody(response.data) :
          {_error: action.payload.message};
        reject(new SubmissionError(validationErrors));
      } else {
        saveEmployeeSuccess(dispatch);
        resolve();
      }
    });
  });
}

function saveEmployeeSuccess(dispatch) {
  closeDialog(dispatch);
  dispatch(showSnackbar("Сотрудник сохранен"));
  dispatch(fetchEmployees());
}

function closeDialog(dispatch) {
  dispatch(resetEmployee());
  dispatch(reset('FormNewEmployee'));
  dispatch(closeEmployeeDialog());
}

const EmployeeDialogForm = reduxForm({
  form: 'FormNewEmployee',
  fields: ['firstname', 'lastname', 'username'],
  validate,
  asyncValidate,
  asyncBlurFields: ['id', 'username'],
  enableReinitialize: true
})(EmployeeDialog);

export default connect(
  state => ({
    isDialogOpen: state.employees.newEmployee.dialogOpen,
    initialValues: state.employees.employeeSingle.employee,
    initialValuesLoading: state.employees.employeeSingle.loading,
    initialValuesLoadingError: state.employees.employeeSingle.error
  }),
  dispatch => ({
    saveEmployee: (data) => attemptSaveEmployee(data, dispatch),
    closeDialog: () => closeDialog(dispatch)
  })
)(EmployeeDialogForm);
