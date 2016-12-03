import React from 'react';
import EmployeesListContainer from '../containers/employees/EmployeesListContainer';
import EmployeeDialogContainer from '../containers/employees/EmployeeDialogContainer';
import NewEmployeeFABContainer from '../containers/employees/NewEmployeeFABContainer';
import DialogConfirmDeleteContainer from '../containers/DialogConfirmDeleteContainer';

const EmployeesPage = (props) => (
  <div>
    <EmployeesListContainer/>
    <EmployeeDialogContainer/>
    <DialogConfirmDeleteContainer/>
    <NewEmployeeFABContainer/>
  </div>
);

export default EmployeesPage;
