import * as type from '../constants/actionTypes';

const initialState = {
    uploadingCommonDesc: false,
    uploadedCommonDescError: null,
    uploadingCourseImg: false,
    uploadedCourseImgError: null
  };

const uploadCourse = (state = initialState, action) => {
    switch(action.type) {
        case type.UPLOAD_COURSE:
            return {
                ...state,
                uploadingCommonDesc: true
            };
        case type.UPLOAD_COURSE_DONE:
            return {
                ...state,
                uploadingCommonDesc: false
            };
        case type.UPLOAD_COURSE_FAIL:
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
        default:
            return state;
    }
}

export default uploadCourse;