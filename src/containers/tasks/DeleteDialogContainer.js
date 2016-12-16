import {connect} from 'react-redux';
import {reduxForm, SubmissionError} from 'redux-form';
import DialogConfirmDelete from '../../components/DialogConfirmDelete';
import {deleteTask, closeDeleteDialog, fetchTasks} from '../../actions/tasks';
import {showSnackbar} from '../../actions/common';

function attemptDeleteTask(id, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(deleteTask(id)).then((action) => {
      if (action.error) {
        const error = action.payload.response ? action.payload.response.data : action.payload;
        reject(new SubmissionError({_error: error.message}));
      } else {
        deleteSuccess(dispatch);
        resolve();
      }
    })
  })
}

function deleteSuccess(dispatch) {
  closeDialog(dispatch);
  dispatch(showSnackbar("Задача удалена"));
  dispatch(fetchTasks());
}

function closeDialog(dispatch) {
  dispatch(closeDeleteDialog());
}

const DeleteDialogForm = reduxForm({
  form: 'FormDeleteTask',
  fields: ['id'],
  enableReinitialize: true
})(DialogConfirmDelete);

export default connect(
  state => ({
    isOpen: state.tasks.deleteTask.dialogOpen,
    initialValues: {id: state.tasks.deleteTask.id},
    message: "Удалить задачу " + state.tasks.deleteTask.title + " ?"
  }),
  dispatch => ({
    confirm: (data) => attemptDeleteTask(data.id, dispatch),
    cancel: () => closeDialog(dispatch)
  })
)(DeleteDialogForm);
