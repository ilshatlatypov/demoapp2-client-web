import {connect} from 'react-redux';
import ActionButtonsGroup from '../../components/ActionButtonsGroup';

export default connect(
  state => ({}),
  dispatch => ({
    openEditDialog: (id) => console.log('openEditDialog'),
    openDeleteDialog: (item) => console.log('openDeleteDialog')
  })
)(ActionButtonsGroup);
