import {connect} from 'react-redux';
import DeleteEmployeeDialog from '../../components/employees/DeleteEmployeeDialog';
import {
  deleteEmployee, requestDeleteEmployee, requestDeleteEmployeeSuccess, requestDeleteEmployeeFailure,
  fetchEmployees, closeDeleteDialog
} from '../../actions/employees';
import {showSnackbar} from '../../actions/common';

function attemptDeleteEmployee(id, dispatch) {
  dispatch(requestDeleteEmployee());
  dispatch(deleteEmployee(id)).then((action) => {
    if (action.error) {
      const error = action.payload.response ? action.payload.response.data : action.payload;
      dispatch(requestDeleteEmployeeFailure(error));
    } else {
      dispatch(requestDeleteEmployeeSuccess());
      dispatch(closeDeleteDialog());
      dispatch(showSnackbar("Сотрудник удален"));
      dispatch(fetchEmployees());
    }
  });
}

export default connect(
  state => ({
    isOpen: state.employees.deleteEmployeeDialog.open,
    employee: state.employees.deleteEmployeeDialog.employee,
    isDeleting: state.employees.deleteEmployee.deleting,
    error: state.employees.deleteEmployee.error
  }),
  dispatch => ({
    confirmDelete: (id) => attemptDeleteEmployee(id, dispatch),
    cancel: () => dispatch(closeDeleteDialog())
  })
)(DeleteEmployeeDialog);
