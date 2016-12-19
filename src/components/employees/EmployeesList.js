import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import Employee from './Employee';

class EmployeesList extends Component {

  componentWillMount() {
    this.props.fetchEmployees();
  }

  render() {
    const { employees, loading, error } = this.props.employeesList;
    const emptyList = employees.length === 0 && !loading && !error;

    return (
      <Paper className="contentPaper">
        <Table fixedHeader={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="idColumn">ID</TableHeaderColumn>
              <TableHeaderColumn className="firstnameColumn">Имя</TableHeaderColumn>
              <TableHeaderColumn className="lastnameColumn">Фамилия</TableHeaderColumn>
              <TableHeaderColumn className="tasksAmountColumn">Всего задач</TableHeaderColumn>
              <TableHeaderColumn className="actionButtonsColumn"></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEmployees(employees)}
          </TableBody>
        </Table>
        { loading ? <LinearProgress mode="indeterminate" /> : null }
        { error ? <div className="listLoadError">Ошибка: {error.message}</div> : null }
        { emptyList ? <div className="listEmptyMsg">Список пуст</div> : null}
      </Paper>
    );
  }

  renderEmployees(employees) {
    return employees.map((employee) => <Employee key={employee.id} employee={employee} />);
  }
}

EmployeesList.propTypes = {
  employeesList: PropTypes.object.isRequired,
  fetchEmployees: PropTypes.func.isRequired
}

export default EmployeesList;
