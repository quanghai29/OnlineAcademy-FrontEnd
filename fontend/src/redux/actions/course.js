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

export const fetchLatestCourses = () => ({
  type: type.FETCH_LATEST_COURSES,
});

export const setLatestCourses = (data) => ({
  type: type.SET_LATEST_COURSES,
  payload: data
});

export const fetchLatestCoursesFail = (message) => ({
  type: type.FETCH_LATEST_COURSES_FAILURE,
  payload: {
    message,
  },
});

export const fetchMostViewCourses = () => ({
  type: type.FETCH_MOST_VIEW_COURSES,
});

export const setMostViewCourses = (data) => ({
  type: type.SET_MOST_VIEW_COURSES,
  payload: data
});

export const fetchMostViewCoursesFail = (message) => ({
  type: type.FETCH_MOST_VIEW_COURSES_FAILURE,
  payload: {
    message,
  },
});