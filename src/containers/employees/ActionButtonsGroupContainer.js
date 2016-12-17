import {connect} from 'react-redux';
import {
  openEmployeeDialog, openDeleteDialog, fetchEmployee
} from '../../actions/employees';
import ActionButtonsGroup from '../../components/ActionButtonsGroup';

function openEditDialog(id, dispatch) {
  dispatch(openEmployeeDialog());
  dispatch(fetchEmployee(id));
}

export default connect(
  state => ({}),
  dispatch => ({
    openEditDialog: (id) => openEditDialog(id, dispatch),
    openDeleteDialog: (item) => dispatch(openDeleteDialog(item))
  })
)(ActionButtonsGroup);
