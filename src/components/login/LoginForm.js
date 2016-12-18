import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function validate(values) {
  const errors = {};
  if (!values.login || values.login.trim() === '') {
    errors.login = "Обязательное поле";
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = "Обязательное поле";
  }
  return errors;
}

const renderTextField = (field) => {
  return (
    <TextField
      floatingLabelText={field.label}
      errorText={field.meta.touched && field.meta.error}
      autoComplete={'off'}
      type={field.type}
      {...field.input}
    />
  )
}

const LoginForm = (props) => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" component={renderTextField} label="Логин" props={{type: 'text'}}/>
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Пароль" props={{type: 'password'}}/>
      </div>
      {error && <div className="formError">{error}</div>}
      <div style={{ textAlign: 'center' }}>
        <RaisedButton
          label="Войти"
          type="submit"
          secondary={true}
          style={{ marginTop: 24 }}
          disabled={pristine || submitting}
        />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['login', 'password'],
  validate,
  touchOnBlur: false
})(LoginForm);
