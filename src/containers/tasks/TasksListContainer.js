import {connect} from 'react-redux';
import {fetchTasks} from '../../actions/tasks';
import TasksList from '../../components/tasks/TasksList';

const getFilteredTasks = (tasksList, filters) => {
  let filtered = tasksList.tasks;
  filtered = applyByEmployeesFilter(filtered, filters.tasksByEmployeesFilter);
  filtered = applySearchFilter(filtered, filters.searchString.trim());
  return {
    tasks: filtered,
    loading: tasksList.loading,
    error: tasksList.error
  }
}

function applyByEmployeesFilter(tasks, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks
    case 'SHOW_ASSIGNED':
      return tasks.filter(t => t.assigneeName !== null)
    case 'SHOW_NOT_ASSIGNED':
      return tasks.filter(t => t.assigneeName === null)
    default:
      return tasks
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
