export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

export function showSnackbar(message) {
  return {
    type: SHOW_SNACKBAR,
    payload: message
  }
}

export function hideSnackbar() {
  return {
    type: HIDE_SNACKBAR
  }
}
