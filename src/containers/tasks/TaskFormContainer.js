import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import TaskForm from '../../components/tasks/TaskForm';

const TaskReduxForm = reduxForm({
  form: 'TaskForm'
})(TaskForm)

export default connect(
  state => ({
    initialValues: state.tasks.taskForEdit.task,
    isInitialValuesLoading: state.tasks.taskForEdit.loading,
    initialValuesLoadingError: state.tasks.taskForEdit.error
  }),
  dispatch => ({})
)(TaskReduxForm);
