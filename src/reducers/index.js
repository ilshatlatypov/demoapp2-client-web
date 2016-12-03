import { combineReducers } from 'redux';
import EmployeesReducer from './reducer_employees';
import TasksReducer from './reducer_tasks';
import FiltersReducer from './reducer_filters';
import CommonReducer from './reducer_common';
import {reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux';
/*import UserReducer from './reducer_user';
import ValidateUserFieldsReducer from './reducer_validateUserFields';
import ResendEmailReducer from './reducer_resendEmail';
import UpdateEmailReducer from './reducer_updateEmail';
import { reducer as formReducer } from 'redux-form';*/

const rootReducer = combineReducers({
  //user: UserReducer,
  //validateFields: ValidateUserFieldsReducer,
  employees: EmployeesReducer,
  tasks: TasksReducer,
  common: CommonReducer,
  filters: FiltersReducer,
  form: formReducer,
  routing: routerReducer
  //resendEmail: ResendEmailReducer,
  //updateEmail: UpdateEmailReducer
});

export default rootReducer;
