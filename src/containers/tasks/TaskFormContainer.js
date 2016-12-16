import {reduxForm} from 'redux-form';
import TaskForm from '../../components/tasks/TaskForm';

export default reduxForm({
  form: 'TaskForm'
})(TaskForm)
