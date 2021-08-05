import * as type from '../constants/actionTypes';

export const setSelectedCourse = (data) => ({
  type: type.SET_SELECTED_COURSE,
  payload: data,
});