import {connect} from 'react-redux';
import {setEmployeesByTaskFilter} from '../../actions/filters';
import EmployeesByTaskSelectField from '../../components/employees/EmployeesByTaskSelectField';

const EmployeesByTaskSelectFieldContainer = connect(
  state => ({
    filter: state.filters.employeesByTaskFilter
  }),
  dispatch => ({
    setFilter: (filter) => dispatch(setEmployeesByTaskFilter(filter)),
    resetFilter: () => dispatch(setEmployeesByTaskFilter('SHOW_ALL'))
  })
)(EmployeesByTaskSelectField);

export default EmployeesByTaskSelectFieldContainer;
