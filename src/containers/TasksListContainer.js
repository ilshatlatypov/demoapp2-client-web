import { connect } from 'react-redux'
import { fetchTasks, fetchTasksSuccess, fetchTasksFailure } from '../actions/tasks';

import TasksList from '../components/TasksList';

const mapStateToProps = (state) => {
  return {
    tasksList: state.tasks.tasksList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => {
      dispatch(fetchTasks()).then((response) => {
            !response.error ? dispatch(fetchTasksSuccess(response.payload)) : dispatch(fetchTasksFailure(response.payload));
          });
    }
  }
}

const TasksListContainer = connect(mapStateToProps, mapDispatchToProps)(TasksList)

export default TasksListContainer
