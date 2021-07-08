import * as type from '../constants/actionTypes';

export const setHotCourse = (data) => ({
  type: type.SET_HOT_COURSES,
  payload: data,
});

export const fetchHotCourse = () => ({
  type: type.FETCH_HOT_COURSES,
});

export const fetchHotCourseFail = (message) => ({
  type: type.FETCH_HOT_COURSES_FAILURE,
  payload: {
    message,
  },
});
