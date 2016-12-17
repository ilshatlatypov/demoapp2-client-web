import React, {PropTypes} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import LinearProgress from 'material-ui/LinearProgress';

const DeleteEmployeeDialog = props => {
  const {isOpen, employee, isDeleting, error, confirmDelete, cancel} = props;
  const employeeId = employee ? employee.id : null;
  const employeeFullname = employee ? employee.firstname + ' ' + employee.lastname : null;

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
      onTouchTap={() => confirmDelete(employeeId)}
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
        <div>Удалить сотрудника {employeeFullname}?</div>
        { error && <div className="formError">{error}</div> }
      </form>
    </Dialog>
  )
}

DeleteEmployeeDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  employee: PropTypes.object,
  isDeleting: PropTypes.bool.isRequired,
  confirmDelete: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
}

export default DeleteEmployeeDialog;
