import {connect} from 'react-redux';
import {submit, SubmissionError, isPristine} from 'redux-form'
import TaskDialog from '../../components/tasks/TaskDialog';
import {
  createTask, fetchTasks, closeTaskDialog, setTaskDialogSubmitting
} from '../../actions/tasks';
import {showSnackbar} from '../../actions/common';

function attemptSaveTask(data, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(setTaskDialogSubmitting(true));
    dispatch(createTask(data)).then((action) => {
      if (action.error) {
        const response = action.payload.response;
        const validationErrors = response ?
          getErrorsFromResponseBody(response.data) :
          {_error: action.payload.message};
        dispatch(setTaskDialogSubmitting(false));
        reject(new SubmissionError(validationErrors));
      } else {
        saveSuccess(dispatch);
        dispatch(setTaskDialogSubmitting(false));
        resolve();
      }
    });
  });
}

function getErrorsFromResponseBody(responseBody) {
  const status = responseBody.status;
  let validationErrors = {};
  if (status === 400) {
    const fieldErrors = responseBody.errors;
    fieldErrors.forEach(function(item) {
      validationErrors[item.field] = item.message;
    });
  } else {
    validationErrors._error = responseBody.message;
  }
  return validationErrors;
}

function saveSuccess(dispatch) {
  closeDialog(dispatch);
  dispatch(showSnackbar("Задача сохранена"));
  dispatch(fetchTasks());
}

function closeDialog(dispatch) {
  //dispatch(resetTask());
  //dispatch(reset('TaskForm'));
  dispatch(closeTaskDialog());
}

export default connect(
  state => ({
    isOpen: state.tasks.taskDialog.open,
    isPristine: isPristine('TaskForm')(state),
    isSubmitting: state.tasks.taskDialog.submitting // redux form does not support isSubmitting('TaskForm')(state)
  }),
  dispatch => ({
    submit: (data) => dispatch(submit('TaskForm')),
    save: (data) => attemptSaveTask(data, dispatch),
    cancel: () => dispatch(closeTaskDialog())
  })
)(TaskDialog);
