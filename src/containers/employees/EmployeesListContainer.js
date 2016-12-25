import {connect} from 'react-redux';
import {fetchEmployees} from '../../actions/employees';
import EmployeesList from '../../components/employees/EmployeesList';

const getFilteredEmployees = (employeesList, filters) => {
  let filtered = employeesList.employees;
  filtered = applyByTaskFilter(filtered, filters.employeesByTaskFilter);
  filtered = applySearchFilter(filtered, filters.searchString.trim());
  return {
    employees: filtered,
    loading: employeesList.loading,
    error: employeesList.error
  }
}

function applyByTaskFilter(employees, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return employees
    case 'SHOW_WITH_TASKS':
      return employees.filter(e => e.tasksAmount > 0)
    case 'SHOW_WITHOUT_TASKS':
      return employees.filter(e => e.tasksAmount === 0)
    default:
      return employees
  }
}

function applySearchFilter(employees, searchString) {
  if (searchString === '') {
    return employees;
  }
  searchString = searchString.toLowerCase();
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

const EmployeesListContainer = connect(
  state => ({
    employeesList: getFilteredEmployees(state.employees.employeesList, state.filters)
  }),
  dispatch => ({
    fetchEmployees: () => dispatch(fetchEmployees())
  })
)(EmployeesList)

export default EmployeesListContainer;
