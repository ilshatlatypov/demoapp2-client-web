import React, {PropTypes} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TaskFormContainer from '../../containers/tasks/TaskFormContainer';
import LinearProgress from 'material-ui/LinearProgress';

const TaskDialog = props => {
  const {isOpen, isPristine, isSubmitting, submit, save, cancel} = props;
  const title = "Новая задача";

  const actions = [
    <FlatButton id="cancelButton"
      label="Отмена"
      primary={true}
      onTouchTap={cancel}
    />,
    <FlatButton id="saveButton"
      label="Сохранить"
      primary={true}
      disabled={isPristine || isSubmitting}
      onTouchTap={submit}
    />
  ];

  return (
    <Dialog
      title={title}
      actions={actions}
      modal={true}
      open={isOpen}
      onRequestClose={cancel}
      contentClassName="taskDialog dialogContent"
      bodyClassName="formDialog"
      autoScrollBodyContent={true}>
      { isSubmitting ? <LinearProgress mode="indeterminate" /> : null }
      <TaskFormContainer onSubmit={save}/>
    </Dialog>
  );
}

TaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isPristine: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submit: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
}

export default TaskDialog;
