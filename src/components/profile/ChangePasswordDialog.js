import React, {PropTypes, Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import LinearProgress from 'material-ui/LinearProgress';
import {Field} from 'redux-form';

// TODO extract to commons
const renderTextField = (field) => {
  return (
    <TextField className={field.name}
      floatingLabelText={field.label}
      errorText={field.meta.touched && field.meta.error}
      autoComplete={'off'}
      disabled={field.disabled}
      type={'password'}
      {...field.input}
    />
  )
}

class ChangePasswordDialog extends Component {
  render() {
    const {error, handleSubmit, pristine, submitting} = this.props;
    const {isDialogOpen, closeDialog, saveNewPassword} = this.props;

    const actions = [
      <FlatButton id="cancelButton"
        label="Отмена"
        primary={true}
        onTouchTap={closeDialog}
      />,
      <FlatButton id="saveButton"
        label="Сохранить"
        primary={true}
        disabled={pristine || submitting}
        onTouchTap={handleSubmit(saveNewPassword)}
      />
    ];

    return (
      <Dialog
        title="Изменение пароля"
        actions={actions}
        modal={true}
        open={isDialogOpen}
        onRequestClose={closeDialog}
        contentClassName="changePasswordDialog dialogContent"
        bodyClassName="formDialog"
        autoScrollBodyContent={true}>
        { submitting ? <LinearProgress mode="indeterminate" /> : null }
        <form onSubmit={handleSubmit(saveNewPassword)}>
          <div>
            <Field name="currentValue" component={renderTextField} label="Текущий пароль"/>
          </div>
          <div>
            <Field name="newValue" component={renderTextField} label="Новый пароль"/>
          </div>
          <div>
            <Field name="newValueConfirmation" component={renderTextField} label="Новый пароль (еще раз)"/>
          </div>
          {error && <div className="formError">{error}</div>}
          <button type="submit" className="hidden">Submit On Enter Key Press</button>
        </form>
      </Dialog>
    );
  }
}

ChangePasswordDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  isDialogOpen: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  saveNewPassword: PropTypes.func.isRequired
}

export default ChangePasswordDialog;
