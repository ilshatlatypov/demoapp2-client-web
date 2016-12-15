import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const TaskDialog = props => {
  const {isOpen, save, close} = props;
  const title = "Новая задача";
  const pristine = false;
  const submitting = false;

  const actions = [
    <FlatButton id="cancelButton"
      label="Отмена"
      primary={true}
      onTouchTap={close}
    />,
    <FlatButton id="saveButton"
      label="Сохранить"
      primary={true}
      disabled={pristine || submitting}
      onTouchTap={save}
    />
  ];

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={true}
      open={isOpen}
      onRequestClose={close}
      contentClassName="taskDialog dialogContent"
      bodyClassName="formDialog"
      autoScrollBodyContent={true}>
      <div style={{padding: 24}}>Hello world!</div>
    </Dialog>
  );
}

TaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
}

export default TaskDialog;
