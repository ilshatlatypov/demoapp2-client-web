import React, {PropTypes, Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TasksByEmployeesSelectField extends Component {
  componentWillMount = () => this.props.resetFilter();

  handleChange = (event, index, value) => this.props.setFilter(value)

  render() {
    return (
      <SelectField value={this.props.filter} onChange={this.handleChange}>
        <MenuItem value={'SHOW_ALL'} primaryText="Все задачи" />
        <MenuItem value={'SHOW_ASSIGNED'} primaryText="Назначенные" />
        <MenuItem value={'SHOW_NOT_ASSIGNED'} primaryText="Неназначенные" />
      </SelectField>
    )
  }
}

TasksByEmployeesSelectField.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired
}

export default TasksByEmployeesSelectField;
