import {connect} from 'react-redux';
import {openTaskDialog, openDeleteDialog, fetchTask} from '../../actions/tasks';
import {fetchEmployees} from '../../actions/employees';
import ActionButtonsGroup from '../../components/ActionButtonsGroup';

function openEditDialog(id, dispatch) {
  dispatch(fetchEmployees());
  dispatch(fetchTask(id));
  dispatch(openTaskDialog());
}

export default connect(
  state => ({}),
  dispatch => ({
    openEditDialog: (id) => openEditDialog(id, dispatch),
    openDeleteDialog: (task) => dispatch(openDeleteDialog(task))
  })
)(ActionButtonsGroup);
