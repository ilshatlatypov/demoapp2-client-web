import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/tasks';
import TasksList from '../../components/tasks/TasksList';

const getFilteredTasks = (tasksList, filters) => {
  let filtered = tasksList.tasks;
  filtered = applySearchFilter(filtered, filters.searchString.trim());
  return {
    tasks: filtered,
    loading: tasksList.loading,
    error: tasksList.error
  }
}

function applySearchFilter(tasks, searchString) {
  if (searchString === '') {
    return tasks;
  }
  searchString = searchString.toLowerCase();
  return tasks.filter(t => titleMatches(t, searchString));
}

function titleMatches(task, searchString) {
  return task.title.toLowerCase().startsWith(searchString);
}

const TasksListContainer = connect(
  state => ({
    tasksList: getFilteredTasks(state.tasks.tasksList, state.filters)
  }),
  dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
  })
)(TasksList);

export default TasksListContainer;
