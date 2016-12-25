import React, {PropTypes, Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {EmployeesByTaskFilters} from '../../actions/filters';

class EmployeesByTaskSelectField extends Component {
  componentWillMount = () => this.props.resetFilter();

  handleChange = (event, index, value) => this.props.setFilter(value)

  render() {
    return (
      <SelectField value={this.props.filter} onChange={this.handleChange}>
        <MenuItem value={EmployeesByTaskFilters.SHOW_ALL} primaryText="Все сотрудники" />
        <MenuItem value={EmployeesByTaskFilters.SHOW_WITHOUT_TASKS} primaryText="Без задач" />
        <MenuItem value={EmployeesByTaskFilters.SHOW_WITH_TASKS} primaryText="С задачами" />
      </SelectField>
    )
  }
}

EmployeesByTaskSelectField.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired
}

export default EmployeesByTaskSelectField;
