import React, {PropTypes, Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';

class TasksDateFilter extends Component {
  componentWillMount = () => this.props.resetFilter();

  handleChange = (event, value) => this.props.setDateFilter(value);

  render() {
    const {dateFilter, setDateFilter} = this.props;
    return (
      <div style={{display: 'flex', alignItems: 'center', marginLeft: 12, marginRight: 12}}>
        <DatePicker style={{width: 220}}
          value={dateFilter}
          locale="ru" DateTimeFormat={global.Intl.DateTimeFormat}
          hintText="Задачи на дату"
          onChange={this.handleChange}/>
        {
          dateFilter ?
          <IconButton
            iconStyle={{width: 18, height: 18}}
            style={{width: 36, height: 36, padding: 8}}
            onTouchTap={() => setDateFilter(null)}>
            <Clear/>
          </IconButton>
          : null
        }
      </div>
    )
  }
}

TasksDateFilter.propTypes = {
  dateFilter: PropTypes.object,
  setDateFilter: PropTypes.func.isRequired,
  resetFilter: PropTypes.func.isRequired
}

export default TasksDateFilter;
