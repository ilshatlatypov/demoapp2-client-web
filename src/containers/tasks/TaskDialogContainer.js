import {connect} from 'react-redux';
import TaskDialog from '../../components/tasks/TaskDialog';
import {closeTaskDialog} from '../../actions/tasks';

export default connect(
  state => ({
    isOpen: state.tasks.dialogOpen
  }),
  dispatch => ({
    save: () => console.log('save'),
    close: () => dispatch(closeTaskDialog())
  })
)(TaskDialog);
