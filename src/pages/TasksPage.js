import React from 'react';
import TasksListContainer from '../containers/tasks/TasksListContainer';
import TaskDialogContainer from '../containers/tasks/TaskDialogContainer';
import NewTaskFABContainer from '../containers/tasks/NewTaskFABContainer';
//import DialogConfirmDeleteContainer from '../containers/DialogConfirmDeleteContainer';

const TasksPage = (props) => (
  <div>
    <TasksListContainer/>
    <TaskDialogContainer/>
    {/*<DialogConfirmDeleteContainer/>*/}
    <NewTaskFABContainer/>
  </div>
);

export default TasksPage;
