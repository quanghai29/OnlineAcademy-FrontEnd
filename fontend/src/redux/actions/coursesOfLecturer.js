import * as type from '../constants/actionTypes';

export const setLecturerCourses = (data) => ({
  type: type.SET_LECTURER_COURSES,
  payload: data,
});

export const fetchLecturerCourses = (lecturer_id) => ({
  type: type.FETCH_LECTURER_COURSES,
  payload: {
    lecturer_id
  }
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

export const uploadCourseDone = () => ({
  type: type.UPLOAD_COURSE_DONE
})

export const uploadCourseFail = (message) => ({
  type: type.UPLOAD_COURSE_FAIL,
  payload: {
    message
  }
})

export const uploadCourseImage = (data) => ({
  type: type.UPLOAD_COURSE_IMAGE,
  payload: data
});

export const uploadCourseImgDone = () => ({
  type: type.UPLOAD_COURSE_IMAGE_DONE
})

export const uploadCourseImgFail = (message) => ({
  type: type.UPLOAD_COURSE_IMAGE_FAIL,
  payload: {
    message
  }
})

export const setIsUpdateCourse = (value) => ({
  type: type.SET_IS_UPDATE_COURSE,
  payload: value
})

export const updateCommonInfoCourse = (formData, course_id) => ({
  type: type.UPDATE_COURSE_COMMON_INFO,
  payload: {
    formData,
    course_id,
  },
});

export const updateCommonInfoCourseDone = (course) => ({
  type: type.UPDATE_COURSE_COMMON_INFO_DONE,
  payload: course,
});

export const updateCommonInfoCourseFail = (message) => ({
  type: type.UPDATE_COURSE_COMMON_INFO_FAIL,
  payload: {
    message,
  },
});

export const deleteCourseById = (id) => ({
  type: type.DELETE_COURSE,
  payload: id
});

export const deleteCourseByIdDone = (id) => ({
  type: type.DELETE_COURSE_DONE,
  payload: id
});

export const deleteCourseByIdFail = (message) => ({
  type: type.UPDATE_COURSE_COMMON_INFO_FAIL,
  payload: {
    message,
  },
})