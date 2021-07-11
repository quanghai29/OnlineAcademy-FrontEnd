import * as type from '../constants/actionTypes';

export const setLecturerCourse = (data) => ({
  type: type.SET_LECTURER_COURSES,
  payload: data,
});

export const fetchLecturerCourse = () => ({
  type: type.FETCH_LECTURER_COURSES,
});

export const fetchLecturerCourseFail = (message) => ({
  type: type.FETCH_LECTURER_COURSES_FAILURE,
  payload: {
    message,
  },
});
