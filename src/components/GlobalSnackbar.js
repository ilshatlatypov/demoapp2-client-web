import React, {PropTypes} from 'react';
import Snackbar from 'material-ui/Snackbar';

const GlobalSnackbar = ({open, message, hide}) => (
  <Snackbar id="snackbar"
    open={open}
    message={message}
    autoHideDuration={4000}
    onRequestClose={hide}
  />
);

GlobalSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired
}

export default GlobalSnackbar;
