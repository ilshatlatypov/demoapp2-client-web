import axiosInstance from './axiosInstance';

export const SET_EMPLOYEES_BY_TASK_FILTER = 'SET_EMPLOYEES_BY_TASK_FILTER';
export const SET_SEARCH_STRING = 'SET_SEARCH_STRING';
export const SET_DRAWER_OPEN = 'SET_DRAWER_OPEN';
export const LOGOUT = 'LOGOUT';

export function setSearchString(searchString) {
  return {
    type: SET_SEARCH_STRING,
    payload: searchString
  }
}

export function setDrawerOpen(open) {
  return {
    type: SET_DRAWER_OPEN,
    payload: open
  }
}

export function logout() {
  const request = axiosInstance.get('/logout');
  return {
    type: LOGOUT,
    payload: request
  };
}

export const EmployeesByTaskFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_WITH_TASKS: 'SHOW_WITH_TASKS',
  SHOW_WITHOUT_TASKS: 'SHOW_WITHOUT_TASKS'
}

export function setEmployeesByTaskFilter(filter) {
  return {
    type: SET_EMPLOYEES_BY_TASK_FILTER,
    payload: filter
  }

}
