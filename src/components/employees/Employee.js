import React, {Component} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import ActionButtonsGroupContainer from '../../containers/ActionButtonsGroupContainer';

class Employee extends Component {
  state = {actionButtonsVisible: false}

  handleMouseEnter = () => this.setState({actionButtonsVisible: true});

  handleMouseLeave = () => this.setState({actionButtonsVisible: false});

  render() {
    const {employee, ...otherProps} = this.props;
    return (
      <TableRow {...otherProps}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {otherProps.children[0]}
        <TableRowColumn className="idColumn">{employee.id}</TableRowColumn>
        <TableRowColumn className="firstnameColumn">{employee.firstname}</TableRowColumn>
        <TableRowColumn className="lastnameColumn">{employee.lastname}</TableRowColumn>
        <TableRowColumn className="actionButtonsColumn">{this.state.actionButtonsVisible ? <ActionButtonsGroupContainer item={employee}/> : null}</TableRowColumn>
      </TableRow>
    );
  }
}

export default Employee;
