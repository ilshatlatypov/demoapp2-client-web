import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import LinearProgress from 'material-ui/LinearProgress';

class TasksList extends Component {

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks, loading, error } = this.props.tasksList;
    
    return (
      <Paper className="contentPaper">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Название</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.renderTasks(tasks)}
          </TableBody>
        </Table>
        { loading ? <LinearProgress mode="indeterminate" /> : null }
        { error ? <div className="listLoadError">Ошибка: {error.message}</div> : null }
      </Paper>
    );
  }

  renderTasks(tasks) {
    return tasks.map((task) => <Task task={task} key={task.id} />);
  }
}

const Task = props => {
  const {task, ...otherProps} = props;
  return (
    <TableRow {...otherProps}>
      {otherProps.children[0]}
      <TableRowColumn>{task.id}</TableRowColumn>
      <TableRowColumn>{task.title}</TableRowColumn>
    </TableRow>
  );
};

export default TasksList;
