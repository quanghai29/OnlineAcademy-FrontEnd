import * as type from '../constants/actionTypes';

export const setLecturerCourses = (data) => ({
  type: type.SET_LECTURER_COURSES,
  payload: data,
});

export const fetchLecturerCourses = () => ({
  type: type.FETCH_LECTURER_COURSES,
});

export const fetchLecturerCourseFail = (message) => ({
  type: type.FETCH_LECTURER_COURSES_FAILURE,
  payload: {
    message,
  },
});

export const setLecturerCourse = (data) => ({
  type: type.SET_LECTURER_COURSE,
  payload: data,
});

export const uploadCourse = (data) => ({
  type: type.UPLOAD_COURSE,
  payload: data
});

export const uploadCourseImage = (data) => ({
  type: type.UPLOAD_COURSE_IMAGE,
  payload: data
});