import {connect} from 'react-redux';
import FAB from '../../components/FAB';
import {openEmployeeDialog} from '../../actions/employees';

export default connect(
  state => ({}),
  dispatch => ({
    openDialog: () => dispatch(openEmployeeDialog())
  })
)(FAB);
