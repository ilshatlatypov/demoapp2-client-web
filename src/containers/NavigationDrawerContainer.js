import {connect} from 'react-redux';
import {setDrawerOpen, logout} from '../actions/filters';

import NavigationDrawer from '../components/NavigationDrawer';

const mapStateToProps = (state) => {
  return {
    location: state.filters.location,
    open: state.filters.drawerOpen
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestChange: (open) => dispatch(setDrawerOpen(open)),
    onNavItemSelected: () => dispatch(setDrawerOpen(false)),
    onLogout: () => dispatch(logout())
  }
}

const NavigationDrawerContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)

export default NavigationDrawerContainer
