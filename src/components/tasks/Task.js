import React, {Component, PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import ActionButtonsGroupContainer from '../../containers/tasks/ActionButtonsGroupContainer';

class Task extends Component {
  state = {actionButtonsVisible: false}

  handleMouseEnter = () => this.setState({actionButtonsVisible: true});

  handleMouseLeave = () => this.setState({actionButtonsVisible: false});

  render() {
    const {task, ...otherProps} = this.props;
    return (
      <TableRow {...otherProps}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {otherProps.children[0]}
        <TableRowColumn className="idColumn">{task.id}</TableRowColumn>
        <TableRowColumn className="titleColumn">{task.title}</TableRowColumn>
        <TableRowColumn className="assigneeNameColumn">{task.assigneeName}</TableRowColumn>
        <TableRowColumn className="actionButtonsColumn">{this.state.actionButtonsVisible ? <ActionButtonsGroupContainer item={task}/> : null}</TableRowColumn>
      </TableRow>
    );
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
}

export default Task;
