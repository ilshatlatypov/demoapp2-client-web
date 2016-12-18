import React, {PropTypes} from 'react';
import {Field} from 'redux-form';
import TextField from 'material-ui/TextField';

// TODO extract to commons
const renderTextField = (field) => {
  return (
    <TextField className={field.name}
      floatingLabelText={field.label}
      errorText={field.meta.touched && field.meta.error}
      autoComplete={'off'}
      disabled={field.disabled}
      {...field.input}
    />
  )
}

const TaskForm = props => {
  const {error, handleSubmit} = props;
  const {isInitialValuesLoading, initialValuesLoadingError} = props;

  const fieldsDisabled = Boolean(isInitialValuesLoading || initialValuesLoadingError);
  const errorMessage = initialValuesLoadingError ? initialValuesLoadingError.message : error;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Название" props={{disabled: fieldsDisabled}}/>
      </div>
      { errorMessage && <div className="formError">{errorMessage}</div> }
      <button type="submit" className="hidden">Submit On Enter Key Press</button>
    </form>
  )
}

TaskForm.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  isInitialValuesLoading: PropTypes.bool.isRequired,
  initialValuesLoadingError: PropTypes.object
}

export default TaskForm;
