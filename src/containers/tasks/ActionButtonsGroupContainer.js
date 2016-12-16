import {connect} from 'react-redux';
import {openDeleteDialog} from '../../actions/tasks';
import ActionButtonsGroup from '../../components/ActionButtonsGroup';

export default connect(
  state => ({}),
  dispatch => ({
    openEditDialog: (id) => console.log('openEditDialog'),
    openDeleteDialog: (task) => dispatch(openDeleteDialog(task))
  })
)(ActionButtonsGroup);
