import {connect} from 'react-redux';
import {setTasksDateFilter} from '../../actions/filters';
import TasksDateFilter from '../../components/tasks/TasksDateFilter';

const TasksDateFilterContainer = connect(
  state => ({
    dateFilter: state.filters.tasksDateFilter
  }),
  dispatch => ({
    setDateFilter: (date) => dispatch(setTasksDateFilter(date)),
    resetFilter: () => dispatch(setTasksDateFilter(null))
  })
)(TasksDateFilter);

export default TasksDateFilterContainer;
