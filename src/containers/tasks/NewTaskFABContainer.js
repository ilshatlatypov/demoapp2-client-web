import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import {openTaskDialog} from '../../actions/tasks';

export default connect(
  state => ({}),
  dispatch => ({
    openDialog: () => dispatch(openTaskDialog())
  })
)(FAB);
