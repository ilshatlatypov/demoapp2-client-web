import React from 'react';
import TasksListContainer from '../containers/tasks/TasksListContainer';
import TaskDialogContainer from '../containers/tasks/TaskDialogContainer';
import NewTaskFABContainer from '../containers/tasks/NewTaskFABContainer';
import DeleteTaskDialogContainer from '../containers/tasks/DeleteTaskDialogContainer';

const TasksPage = (props) => (
  <div>
    <TasksListContainer/>
    <TaskDialogContainer/>
    <DeleteTaskDialogContainer/>
    <NewTaskFABContainer/>
  </div>
);

export default TasksPage;
