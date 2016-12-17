import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

const DeleteTaskDialog = props => {
  const {isOpen, task, isDeleting, error, confirmDelete, cancel} = props;
  const taskId = task ? task.id : null;
  const taskTitle = task ? task.title : null;

  const actions = [
    <FlatButton
      label="Отмена"
      primary={true}
      onTouchTap={cancel}
    />,
    <FlatButton id="confirmDeleteButton"
      label="Удалить"
      primary={true}
      disabled={isDeleting}
      onTouchTap={() => confirmDelete(taskId)}
    />,
  ]

  return (
    <Dialog
      actions={actions}
      open={isOpen}
      contentClassName="deleteDialog dialogContent"
      bodyClassName="deleteDialogBody"
    >
      { isDeleting && <LinearProgress mode="indeterminate" /> }
      <form>
        <div>Удалить задачу {taskTitle}?</div>
        { error && <div className="formError">{error}</div> }
      </form>
    </Dialog>
  )
}

DeleteTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  task: PropTypes.object,
  isDeleting: PropTypes.bool.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
}

export default DeleteTaskDialog;
