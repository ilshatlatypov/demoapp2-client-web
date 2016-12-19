import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import TaskForm from '../../components/tasks/TaskForm';

function validate(values) {
  const errors = {};
  if (!values.title || values.title.trim() === '') {
    errors.title = "Обязательное поле";
  }
  return errors;
}

const TaskReduxForm = reduxForm({
  form: 'TaskForm',
  fields: ['title'],
  validate
})(TaskForm)

export default connect(
  state => ({
    initialValues: state.tasks.taskForEdit.task,
    isInitialValuesLoading: state.tasks.taskForEdit.loading,
    initialValuesLoadingError: state.tasks.taskForEdit.error,
    employees: state.employees.employeesList.employees,
    isEmployeesLoading: state.employees.employeesList.loading,
    employeesLoadingError: state.employees.employeesList.error
  }),
  dispatch => ({})
)(TaskReduxForm);
