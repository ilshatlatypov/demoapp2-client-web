import React from 'react';
import TasksByEmployeesSelectFieldContainer from '../../containers/tasks/TasksByEmployeesSelectFieldContainer';
import TasksDateFilterContainer from '../../containers/tasks/TasksDateFilterContainer';

const TasksFilters = props => (
  <div className="contentPaper" style={{display: 'flex'}}>
    <TasksByEmployeesSelectFieldContainer/>
    <TasksDateFilterContainer/>
  </div>
)

export default TasksFilters;
