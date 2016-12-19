import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import {openTaskDialog} from '../../actions/tasks';
import {fetchEmployees} from '../../actions/employees';

function openTaskDialogAndLoadEmployees(dispatch) {
  dispatch(fetchEmployees());
  dispatch(openTaskDialog());
}

export default connect(
  state => ({}),
  dispatch => ({
    openDialog: () => openTaskDialogAndLoadEmployees(dispatch)
  })
)(FAB);
