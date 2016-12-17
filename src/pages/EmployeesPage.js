import React from 'react';
import EmployeesListContainer from '../containers/employees/EmployeesListContainer';
import EmployeeDialogContainer from '../containers/employees/EmployeeDialogContainer';
import NewEmployeeFABContainer from '../containers/employees/NewEmployeeFABContainer';
import DeleteEmployeeDialogContainer from '../containers/employees/DeleteEmployeeDialogContainer';

const EmployeesPage = (props) => (
  <div>
    <EmployeesListContainer/>
    <EmployeeDialogContainer/>
    <DeleteEmployeeDialogContainer/>
    <NewEmployeeFABContainer/>
  </div>
);

export default EmployeesPage;
