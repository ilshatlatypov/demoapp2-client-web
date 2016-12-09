import {connect} from 'react-redux';
import {reduxForm, SubmissionError, reset} from 'redux-form';
import ChangePasswordDialog from '../../components/profile/ChangePasswordDialog';
import {requestChangePassword, closeChangePasswordDialog} from '../../actions/profile';
import {showSnackbar} from '../../actions/common';

function validate(values) {
  const errors = {};
  if (!values) {
    return errors;
  }

  if (!values.currentValue || values.currentValue.trim() === '') {
    errors.currentValue = "Обязательное поле";
  }

  const newValue = values.newValue;
  const newValueDefined = newValue && newValue.trim() !== '';
  if (!newValueDefined) {
    errors.newValue = "Обязательное поле";
  } else if (newValue.length < 3 || newValue.length > 20) {
    errors.newValue = "Минимум 3 символа, максимум 20";
  }

  const newValueConfirmation = values.newValueConfirmation
  const newValueConfirmationDefined = newValueConfirmation && newValueConfirmation.trim() !== '';
  if (!newValueConfirmationDefined) {
    errors.newValueConfirmation = "Обязательное поле";
  }

  if (newValueDefined && newValueConfirmationDefined) {
    if (newValue !== newValueConfirmation) {
      errors.newValueConfirmation = "Должно совпадать с новым паролем";
    }
  }

  return errors;
}

function getErrorsFromResponseBody(responseBody) {
  const status = responseBody.status;
  let validationErrors = {};
  if (status === 400) {
    const fieldErrors = responseBody.errors;
    fieldErrors.forEach(function(fieldError) {
      validationErrors[fieldError.field] = getFieldErrorMessage(fieldError);
    });
  } else {
    validationErrors._error = responseBody.message;
  }
  return validationErrors;
}

function getFieldErrorMessage(fieldError) {
  if (fieldError.field === 'currentValue' && fieldError.code === 'NoMatch') {
    return 'Неправильный пароль';
  } else {
    return fieldError.message;
  }
}

function attemptSaveNewPassword(data, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(requestChangePassword(data)).then((action) => {
      if (action.error) {
        const response = action.payload.response;
        const validationErrors = response ?
          getErrorsFromResponseBody(response.data) :
          {_error: action.payload.message};
        reject(new SubmissionError(validationErrors));
      } else {
        saveNewPasswordSuccess(dispatch);
        resolve();
      }
    });
  });
}

function saveNewPasswordSuccess(dispatch) {
  closeDialog(dispatch);
  dispatch(showSnackbar("Пароль изменен"));
}

function closeDialog(dispatch) {
  dispatch(reset('FormChangePassword'));
  dispatch(closeChangePasswordDialog());
}

const ChangePasswordDialogForm = reduxForm({
  form: 'FormChangePassword',
  fields: ['currentValue', 'newValue', 'newValueConfirmation'],
  validate
})(ChangePasswordDialog);

export default connect(
  state => ({
    isDialogOpen: state.profile.changePasswordDialog.open
  }),
  dispatch => ({
    saveNewPassword: (data) => attemptSaveNewPassword(data, dispatch),
    closeDialog: () => closeDialog(dispatch)
  })
)(ChangePasswordDialogForm);
