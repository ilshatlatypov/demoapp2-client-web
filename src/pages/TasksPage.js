import React from 'react';
import TasksListContainer from '../containers/tasks/TasksListContainer';
//import EmployeeDialogContainer from '../containers/employees/EmployeeDialogContainer';
import NewTaskFABContainer from '../containers/tasks/NewTaskFABContainer';
//import DialogConfirmDeleteContainer from '../containers/DialogConfirmDeleteContainer';

const TasksPage = (props) => (
  <div>
    <TasksListContainer/>
    {/*<EmployeeDialogContainer/>*/}
    {/*<DialogConfirmDeleteContainer/>*/}
    <NewTaskFABContainer/>
  </div>
);

export default TasksPage;
