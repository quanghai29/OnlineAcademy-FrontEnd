import * as type from '../constants/actionTypes';

export const setCourse = (data) => ({
  type: type.SET_COURSE,
  payload: data,
});

export const fetchCourse = () => ({
  type: type.FETCH_COURSE,
});

export const fetchCourseFail = (message) => ({
  type: type.FETCH_FAILURE,
  payload: {
    message,
  },
});
