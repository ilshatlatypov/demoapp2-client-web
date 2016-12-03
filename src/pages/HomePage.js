import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router';

const Home = props => {
  return (
    <div>
      <Paper className="contentPaper" style={{padding:24}}>
        <h3 style={{margin:0}}>Задачи</h3>
        <p>Всего задач: <Link to="/tasks">23</Link></p>
        <p>Сегодня: выполнено 0 из 5</p> {/* link to tasks for today */}
        <p>Неназначенных задач на сегодня: 4</p> {/* link to unassigned tasks for today */}
        <p>Неназначенных задач всего: 4</p> {/* link to all unassigned tasks */}
        <p>Просроченных задач: 4</p> {/* link to overdued tasks */}
      </Paper>
      <Paper className="contentPaper" style={{padding:24}}>
        <h3 style={{margin:0}}>Сотрудники</h3>
        <p>Всего сотрудников: <Link to="/employees">13</Link></p> {/* link to all employees */}
        <p>Сотрудников без задач: <Link to="/employees">4</Link></p> {/* link to employees without tasks */}
      </Paper>
    </div>
  );
};

export default Home;
