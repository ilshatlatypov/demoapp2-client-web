import React from 'react';
import EmployeesFilters from '../components/employees/EmployeesFilters';
import EmployeesListContainer from '../containers/employees/EmployeesListContainer';
import EmployeeDialogContainer from '../containers/employees/EmployeeDialogContainer';
import NewEmployeeFABContainer from '../containers/employees/NewEmployeeFABContainer';
import DeleteEmployeeDialogContainer from '../containers/employees/DeleteEmployeeDialogContainer';

const EmployeesPage = (props) => (
  <div>
    <EmployeesFilters/>
    <EmployeesListContainer/>
    <EmployeeDialogContainer/>
    <DeleteEmployeeDialogContainer/>
    <NewEmployeeFABContainer/>
  </div>
);

export default EmployeesPage;
