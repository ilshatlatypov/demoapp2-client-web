import {connect} from 'react-redux'
import {setEmployeesWithoutTasksFilter, setDrawerOpen} from '../actions/filters';

import AppToolbar from '../components/AppToolbar';

const mapStateToProps = (state) => {
  return {
    location: state.filters.location,
    employeesWithoutTasksFilter: state.filters.employeesWithoutTasksFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setEmployeesWithoutTasksFilter: (filter) => {
      dispatch(setEmployeesWithoutTasksFilter(filter));
    },
    onMenuIconButtonTouchTap: () => dispatch(setDrawerOpen(true))
  }
}

const AppToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(AppToolbar)

export default AppToolbarContainer
