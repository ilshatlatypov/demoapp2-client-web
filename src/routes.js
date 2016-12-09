import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import NotFoundPage from './pages/NotFoundPage';
import TasksListContainer from './containers/TasksListContainer';
import ProfilePage from './pages/ProfilePage';
import axiosInstance from './actions/axiosInstance';

function checkCredentialsForNotFound(nextState, replace, callback) {
  checkCredentialsForPath('/', replace, callback);
}

function checkCredentials(nextState, replace, callback) {
  checkCredentialsForPath(nextState.location.pathname, replace, callback);
}

function checkCredentialsForPath(path, replace, callback) {
  axiosInstance.get(path)
    .then((res) => {
      // credentials are fine, do nothing
      callback();
    })
    .catch((err) => {
      replace('/login');
      callback();
    });
}

export const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} onEnter={checkCredentials}/>
    <Route path='/employees' component={EmployeesPage} onEnter={checkCredentials}/>
    <Route path='/tasks' component={TasksListContainer} onEnter={checkCredentials}/>
    <Route path='/profile' component={ProfilePage} onEnter={checkCredentials}/>
    <Route path='/login' component={LoginPage} />
    <Route path='*' component={NotFoundPage} onEnter={checkCredentialsForNotFound}/>
  </Route>
)
