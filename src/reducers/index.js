import { combineReducers } from 'redux';
import EmployeesReducer from './reducer_employees';
import TasksReducer from './reducer_tasks';
import ProfileReducer from './reducer_profile';
import FiltersReducer from './reducer_filters';
import CommonReducer from './reducer_common';
import {reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  employees: EmployeesReducer,
  tasks: TasksReducer,
  profile: ProfileReducer,
  common: CommonReducer,
  filters: FiltersReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
