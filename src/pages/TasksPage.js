import React from 'react';
import TasksFilters from '../components/tasks/TasksFilters';
import TasksListContainer from '../containers/tasks/TasksListContainer';
import TaskDialogContainer from '../containers/tasks/TaskDialogContainer';
import NewTaskFABContainer from '../containers/tasks/NewTaskFABContainer';
import DeleteTaskDialogContainer from '../containers/tasks/DeleteTaskDialogContainer';

const TasksPage = (props) => (
  <div>
    <TasksFilters/>
    <TasksListContainer/>
    <TaskDialogContainer/>
    <DeleteTaskDialogContainer/>
    <NewTaskFABContainer/>
  </div>
);

export default TasksPage;
