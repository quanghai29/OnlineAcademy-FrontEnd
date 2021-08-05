import * as type from '../constants/actionTypes';

const initialState = {
    uploadingCommonDesc: false,
    uploadedCommonDescError: null,
    uploadingCourseImg: false,
    uploadedCourseImgError: null,
    isUpdateCourse: false
  };

const uploadCourse = (state = initialState, action) => {
    switch(action.type) {
        case type.UPLOAD_COURSE:
        case type.UPDATE_COURSE_COMMON_INFO:
            return {
                ...state,
                uploadingCommonDesc: true
            };
        case type.UPLOAD_COURSE_DONE:
        case type.UPDATE_COURSE_COMMON_INFO_DONE:
            return {
                ...state,
                uploadingCommonDesc: false
            };
        case type.UPLOAD_COURSE_FAIL:
        case type.UPDATE_COURSE_COMMON_INFO_FAIL:
            return {
                ...state,
                uploadingCommonDesc: false,
                uploadedCommonDescError: action.payload.message
            }
        case type.UPLOAD_COURSE_IMAGE:
            return {
                ...state,
                uploadingCourseImg: true
            }
        case type.UPLOAD_COURSE_IMAGE_DONE:
            return {
                ...state,
                uploadingCourseImg: false
            }
        case type.UPLOAD_COURSE_IMAGE_FAIL:
            return {
                ...state,
                uploadingCourseImg: false,
                uploadedCourseImgError: action.payload.message
            }
        case type.SET_IS_UPDATE_COURSE:
            return {
                ...state,
                isUpdateCourse: action.payload
            }
        default:
            return state;
    }
}

export default uploadCourse;