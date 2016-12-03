import {connect} from 'react-redux';
import {hideSnackbar} from '../actions/common';

import GlobalSnackbar from '../components/GlobalSnackbar';

const mapStateToProps = (state) => {
  return {
    open: state.common.snackbar.open,
    message: state.common.snackbar.message
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    hide: (open) => dispatch(hideSnackbar())
  }
}

const GlobalSnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(GlobalSnackbar)

export default GlobalSnackbarContainer
