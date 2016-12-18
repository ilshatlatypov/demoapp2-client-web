import {connect} from 'react-redux';
import {openTaskDialog, openDeleteDialog, fetchTask} from '../../actions/tasks';
import ActionButtonsGroup from '../../components/ActionButtonsGroup';

function openEditDialog(id, dispatch) {
  dispatch(openTaskDialog());
  dispatch(fetchTask(id));
}

export default connect(
  state => ({}),
  dispatch => ({
    openEditDialog: (id) => openEditDialog(id, dispatch),
    openDeleteDialog: (task) => dispatch(openDeleteDialog(task))
  })
)(ActionButtonsGroup);
