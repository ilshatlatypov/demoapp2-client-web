import {connect} from 'react-redux';
import DialogConfirmDelete from '../components/DialogConfirmDelete';
import {
  deleteEmployee, closeDeleteEmployeeDialog, fetchEmployees
} from '../actions/employees';
import {showSnackbar} from '../actions/common';
import {reduxForm, SubmissionError} from 'redux-form';

function attemptDeleteEmployee(id, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(deleteEmployee(id)).then((action) => {
      if (action.error) {
        const error = action.payload.response ? action.payload.response.data : action.payload;
        reject(new SubmissionError({_error: error.message}));
      } else {
        deleteEmployeeSuccess(dispatch);
        resolve();
      }
    })
  })
}

function deleteEmployeeSuccess(dispatch) {
  closeDialog(dispatch);
  dispatch(showSnackbar("Сотрудник удален"));
  dispatch(fetchEmployees());
}

function closeDialog(dispatch) {
  dispatch(closeDeleteEmployeeDialog());
}

const DialogConfirmDeleteForm = reduxForm({
  form: 'FormDeleteEmployee',
  fields: ['id'],
  enableReinitialize: true
})(DialogConfirmDelete);

export default connect(
  state => ({
    isOpen: state.employees.deleteEmployee.dialogOpen,
    initialValues: {id: state.employees.deleteEmployee.id},
    message: "Удалить сотрудника " + state.employees.deleteEmployee.fullname + " ?"
  }),
  dispatch => ({
    confirm: (data) => attemptDeleteEmployee(data.id, dispatch),
    cancel: () => closeDialog(dispatch)
  })
)(DialogConfirmDeleteForm);
