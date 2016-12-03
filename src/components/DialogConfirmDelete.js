import React, {Component, PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

class DialogConfirmDelete extends Component {
  render() {
    const {isOpen, message, cancel, confirm} = this.props;
    const {error, handleSubmit, submitting} = this.props;

    const actions = [
      <FlatButton
        label="Отмена"
        primary={true}
        onTouchTap={cancel}
      />,
      <FlatButton
        label="Удалить"
        primary={true}
        onTouchTap={handleSubmit(confirm)}
      />,
    ]

    return (
      <Dialog actions={actions} open={isOpen} contentClassName="dialogContent" bodyClassName="deleteDialog">
        {submitting ? <LinearProgress/> : null}
        <form onSubmit={handleSubmit(confirm)}>
          {message}
          {error && <div className="formError">{error}</div>}
        </form>
      </Dialog>
    )
  }
}

DialogConfirmDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string,
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default DialogConfirmDelete;
