import {connect} from 'react-redux';
import {fetchEmployees} from '../../actions/employees';
import EmployeesList from '../../components/employees/EmployeesList';

const getFilteredEmployees = (employeesList, filters) => {
  let filteredEmployeesList = {
    employees: employeesList.employees,
    loading: employeesList.loading,
    error: employeesList.error
  }
  if (filters.employeesWithoutTasksFilter) {
    filteredEmployeesList.employees = filteredEmployeesList.employees.filter(e => e.id < 10);
  }
  if (filters.searchString !== '') {
    let searchStringLC = filters.searchString.toLowerCase();
    filteredEmployeesList.employees = filteredEmployeesList.employees.filter(e => e.firstname.toLowerCase().startsWith(searchStringLC));
  }
  return filteredEmployeesList;
}

const mapStateToProps = (state) => {
  return {
    employeesList: getFilteredEmployees(state.employees.employeesList, state.filters)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees())
  }
}

const EmployeesListContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeesList)

export default EmployeesListContainer
