import React from 'react';
import TasksListContainer from '../containers/tasks/TasksListContainer';
import TaskDialogContainer from '../containers/tasks/TaskDialogContainer';
import NewTaskFABContainer from '../containers/tasks/NewTaskFABContainer';
import DeleteDialogContainer from '../containers/tasks/DeleteDialogContainer';

const TasksPage = (props) => (
  <div>
    <TasksListContainer/>
    <TaskDialogContainer/>
    <DeleteDialogContainer/>
    <NewTaskFABContainer/>
  </div>
);

export default TasksPage;
