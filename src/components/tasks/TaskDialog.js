import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TaskFormContainer from '../../containers/tasks/TaskFormContainer';

const TaskDialog = props => {
  const {isOpen, save, close, submit} = props;
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
      onTouchTap={submit}
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
      <TaskFormContainer onSubmit={save}/>
    </Dialog>
  );
}

TaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default TaskDialog;
