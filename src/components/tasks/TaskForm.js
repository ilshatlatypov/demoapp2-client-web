import React from 'react';
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
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Название"/>
      </div>
      { error && <div className="formError">{error}</div> }
      <button type="submit" className="hidden">Submit On Enter Key Press</button>
    </form>
  )
}

export default TaskForm;
