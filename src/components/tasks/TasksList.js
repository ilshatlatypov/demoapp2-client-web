import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';
import Task from './Task';

class TasksList extends Component {

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks, loading, error } = this.props.tasksList;
    const emptyList = tasks.length === 0 && !loading && !error;

    return (
      <Paper className="contentPaper">
        <Table fixedHeader={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn className="idColumn">ID</TableHeaderColumn>
              <TableHeaderColumn className="titleColumn">Название</TableHeaderColumn>
              <TableHeaderColumn className="actionButtonsColumn"></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderTasks(tasks)}
          </TableBody>
        </Table>
        { loading ? <LinearProgress mode="indeterminate" /> : null }
        { error ? <div className="listLoadError">Ошибка: {error.message}</div> : null }
        { emptyList ? <div className="listEmptyMsg">Список пуст</div> : null }
      </Paper>
    );
  }

  renderTasks(tasks) {
    return tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

TasksList.propTypes = {
  tasksList: PropTypes.object.isRequired,
  fetchTasks: PropTypes.func.isRequired
}

export default TasksList;
