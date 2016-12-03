import React from 'react';
import Paper from 'material-ui/Paper';
import {browserHistory} from 'react-router';
import {SubmissionError} from 'redux-form';
import qs from 'qs';
import LoginForm from '../components/login/LoginForm';
import axiosInstance from '../actions/axiosInstance';

class LoginPage extends React.Component {

  handleSubmit = (values) => {
    const credentials = qs.stringify({ username: values.login, password: values.password });
    return axiosInstance.post('/login', credentials)
      .then((response) => browserHistory.push('/'))
      .catch((error) => {
        let errorMessage;
        if (error.response) {
          errorMessage = error.response.status === 401 ?
            'Неправильный логин или пароль' : error.response.data.message;
        } else {
          errorMessage = error.message;
        }
        throw new SubmissionError({_error: errorMessage});
      });
  }

  render() {
    return (
      <Paper id="loginPaper">
        <h3>Вход</h3>
        <LoginForm onSubmit={this.handleSubmit} />
      </Paper>
    );
  }
}

export default LoginPage;
