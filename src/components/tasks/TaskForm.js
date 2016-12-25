import React, {PropTypes} from 'react';
import {Field} from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {DatePicker} from 'redux-form-material-ui';
import dateFormat from 'dateformat';

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

const renderSelectField = field => (
  <SelectField
    floatingLabelText={field.label}
    errorText={field.meta.touched && field.meta.error}
    {...field.input}
    onChange={(event, index, value) => field.input.onChange(value)}
    children={field.children}
    disabled={field.disabled}
  />
)

const renderEmployeeMenuItems = employees => {
  return employees.map((employee) => (
    <MenuItem
      key={employee.id}
      value={employee.id}
      primaryText={employee.firstname + ' ' + employee.lastname}
    />
  ));
}

const formatDate = (value, name) => value === '' ? null : new Date(value);

const normalizeDate = (value) => dateFormat(value, "yyyy-mm-dd");

const TaskForm = props => {
  const {error, handleSubmit} = props;
  const {isInitialValuesLoading, initialValuesLoadingError} = props;
  const {employees, isEmployeesLoading, employeesLoadingError} = props;

  const fieldsDisabled = Boolean(isInitialValuesLoading || initialValuesLoadingError || isEmployeesLoading || employeesLoadingError);
  let errorMessage;
  if (initialValuesLoadingError) {
    errorMessage = initialValuesLoadingError.message;
  } else if (employeesLoadingError) {
    errorMessage = employeesLoadingError.message;
  } else {
    errorMessage = error;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Название" props={{disabled: fieldsDisabled}}/>
      </div>
      <div>
        <Field name="dueDate"
          type="string"
          component={DatePicker}
          minDate={new Date()}
          format={formatDate}
          normalize={normalizeDate}
          locale="ru" DateTimeFormat={global.Intl.DateTimeFormat}
          floatingLabelText="Дата"/>
      </div>
      <div>
        <Field name="assigneeId" component={renderSelectField} label="Исполнитель" props={{disabled: fieldsDisabled}}>
          <MenuItem key={0} value={0} primaryText={"Не назначен"}/>
          {renderEmployeeMenuItems(employees)}
        </Field>
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
  initialValuesLoadingError: PropTypes.object,
  employees: PropTypes.array.isRequired,
  isEmployeesLoading: PropTypes.bool.isRequired,
  employeesLoadingError: PropTypes.object
}

export default TaskForm;
