import {connect} from 'react-redux';
import DeleteTaskDialog from '../../components/tasks/DeleteTaskDialog';
import {
  deleteTask, requestDeleteTask, requestDeleteTaskSuccess, requestDeleteTaskFailure,
  fetchTasks, closeDeleteDialog
} from '../../actions/tasks';
import {showSnackbar} from '../../actions/common';

function attemptDeleteTask(id, dispatch) {
  dispatch(requestDeleteTask());
  dispatch(deleteTask(id)).then((action) => {
    if (action.error) {
      const error = action.payload.response ? action.payload.response.data : action.payload;
      dispatch(requestDeleteTaskFailure(error));
    } else {
      dispatch(requestDeleteTaskSuccess());
      dispatch(closeDeleteDialog());
      dispatch(showSnackbar("Задача удалена"));
      dispatch(fetchTasks());
    }
  });
}

export default connect(
  state => ({
    isOpen: state.tasks.deleteTaskDialog.open,
    task: state.tasks.deleteTaskDialog.task,
    isDeleting: state.tasks.deleteTask.deleting,
    error: state.tasks.deleteTask.error
  }),
  dispatch => ({
    confirmDelete: (id) => attemptDeleteTask(id, dispatch),
    cancel: () => dispatch(closeDeleteDialog())
  })
)(DeleteTaskDialog);
