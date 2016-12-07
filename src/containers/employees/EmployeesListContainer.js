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

  let searchString = filters.searchString.trim();
  if (searchString !== '') {
    searchString = searchString.toLowerCase();
    filteredEmployeesList.employees = applySearchFilter(filteredEmployeesList.employees, searchString);
  }
  return filteredEmployeesList;
}

function applySearchFilter(employees, searchString) {
  if (!hasWhiteSpace(searchString)) {
    return employees.filter(emp => firstnameOrLastnameMatch(emp, searchString));
  } else {
    const words = searchString.split(' ');
    return employees.filter(emp => firstnameAndLastnameMatch(emp, words[0], words[1]));
  }
}

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function firstnameOrLastnameMatch(employee, searchString) {
  return employee.firstname.toLowerCase().startsWith(searchString) ||
         employee.lastname.toLowerCase().startsWith(searchString);
}

function firstnameAndLastnameMatch(employee, searchWord1, searchWord2) {
  const firstname = employee.firstname.toLowerCase();
  const lastname = employee.lastname.toLowerCase();
  return (firstname.startsWith(searchWord1) && lastname.startsWith(searchWord2)) ||
         (firstname.startsWith(searchWord2) && lastname.startsWith(searchWord1))
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
