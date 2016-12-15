import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/tasks';
import TasksList from '../../components/tasks/TasksList';

const mapStateToProps = (state) => {
  return {
    tasksList: state.tasks.tasksList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(fetchTasks())
  }
}

const TasksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList);

export default TasksListContainer;
