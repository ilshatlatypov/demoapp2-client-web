import React, {PropTypes, Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import {Field} from 'redux-form';

// TODO extract to commons
const renderTextField = (field) => {
  return (
    <TextField
      floatingLabelText={field.label}
      errorText={field.meta.touched && field.meta.error}
      autoComplete={'off'}
      disabled={field.disabled}
      {...field.input}
    />
  )
}

class EmployeeDialog extends Component {
  render() {
    const {error, handleSubmit, pristine, submitting, initialValues} = this.props;
    const {isDialogOpen, closeDialog, saveEmployee, initialValuesLoading, initialValuesLoadingError} = this.props;

    const isEditing = Boolean(initialValues || initialValuesLoading || initialValuesLoadingError);
    const title = isEditing ? "Изменение сотрудника" : "Новый сотрудник";
    const progressVisible = initialValuesLoading || submitting;
    const errorMessage = initialValuesLoadingError ? initialValuesLoadingError.message : error;
    const fieldsDisabled = Boolean(initialValuesLoading || initialValuesLoadingError);

    const actions = [
      <FlatButton
        label="Отмена"
        primary={true}
        onTouchTap={closeDialog}
      />,
      <FlatButton
        label="Сохранить"
        primary={true}
        disabled={pristine || submitting}
        onTouchTap={handleSubmit(saveEmployee)}
      />
    ];

    return (
      <Dialog
        title={title}
        actions={actions}
        modal={true}
        open={isDialogOpen}
        onRequestClose={closeDialog}
        contentClassName="dialogContent"
        bodyClassName="formDialog"
        autoScrollBodyContent={true}>
        { progressVisible ? <LinearProgress mode="indeterminate" /> : null }
        <form onSubmit={handleSubmit(saveEmployee)}>
          <div>
            <Field name="firstname" component={renderTextField} label="Имя" props={{disabled: fieldsDisabled}}/>
          </div>
          <div>
            <Field name="lastname" component={renderTextField} label="Фамилия" props={{disabled: fieldsDisabled}}/>
          </div>
          <div>
            <Field name="username" component={renderTextField} label="Логин"  props={{disabled: (fieldsDisabled || isEditing)}}/>
          </div>
          {errorMessage && <div className="formError">{errorMessage}</div>}
          <button type="submit" className="hidden">Submit On Enter Key Press</button>
        </form>
      </Dialog>
    );
  }
}

EmployeeDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  saveEmployee: PropTypes.func.isRequired
}

export default EmployeeDialog;
