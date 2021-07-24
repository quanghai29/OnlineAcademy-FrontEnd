import * as type from '../constants/actionTypes';

export const setCourse = (data) => ({
  type: type.SET_COURSE,
  payload: data,
});

export const setCourses = (data) => ({
  type: type.SET_COURSES,
  payload: data,
});

export const fetchCourses = () => ({
  type: type.FETCH_COURSES,
});

export const fetchCourseFails = (message) => ({
  type: type.FETCH_COURSES_FAILURE,
  payload: {
    message,
  },
});