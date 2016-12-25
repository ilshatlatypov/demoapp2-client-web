import {connect} from 'react-redux';
import {setTasksByEmployeesFilter} from '../../actions/filters';
import TasksByEmployeesSelectField from '../../components/tasks/TasksByEmployeesSelectField';

const TasksByEmployeesSelectFieldContainer = connect(
  state => ({
    filter: state.filters.tasksByEmployeesFilter
  }),
  dispatch => ({
    setFilter: (filter) => dispatch(setTasksByEmployeesFilter(filter)),
    resetFilter: () => dispatch(setTasksByEmployeesFilter('SHOW_ALL'))
  })
)(TasksByEmployeesSelectField);

export default TasksByEmployeesSelectFieldContainer;
