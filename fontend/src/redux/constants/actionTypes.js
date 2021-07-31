// These are types of actions
export const GET_COURSES = 'GET_COURSES';
export const SELECT_COURSE = "SELECT_COURSE";

export const SET_COURSE = 'SET_COURSE';

export const FETCH_COURSES = 'FETCH_COURSES';
export const SET_COURSES = 'SET_COURSES';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

//=====================CONSTANTS FOR SIGN UP/LOG IN FORM ACTIONS ==========================
export const SET_SIGN_UP_USERNAME = 'SET_SIGN_UP_USERNAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_SIGN_UP_PASSWORD = 'SET_SIGN_UP_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_SIGN_UP_RESPONSE = 'SET_SIGN_UP_RESPONSE';
export const VALIDATE_SIGN_UP_USERNAME = 'VALIDATE_SIGN_UP_USERNAME';
export const VALIDATE_EMAIL = 'VALIDATE_EMAIL';
export const VALIDATE_SIGN_UP_PASSWORD = 'VALIDATE_SIGN_UP_PASSWORD';
export const VALIDATE_CONFIRM_PASSWORD = 'VALIDATE_CONFIRM_PASSWORD';
export const SUBMIT_SIGNUP_FORM = 'SUBMIT_SIGNUP_FORM';


export const VALIDATE_LOG_IN_USERNAME = 'VALIDATE_LOG_IN_USERNAME';
export const VALIDATE_LOG_IN_PASSWORD = 'VALIDATE_LOG_IN_PASSWORD';
export const SET_LOG_IN_USERNAME = 'SET_LOG_IN_USERNAME';
export const SET_LOG_IN_PASSWORD = 'SET_LOG_IN_PASSWORD';
export const SUBMIT_LOG_IN_FORM = 'SUBMIT_LOG_IN_FORM';
export const SET_ENTIRE_LOG_IN_FORM_STATE = 'SET_ENTIRE_LOG_IN_FORM_STATE';
export const RESET_LOG_IN_FORM = 'RESET_LOG_IN_FORM';
export const SET_LOG_IN_RESPONSE = 'SET_LOG_IN_RESPONSE';
export const REQUEST_ACTIVE_ACCOUNT = 'REQUEST_ACTIVE_ACCOUNT';
export const RESET_RESPONSE_DATA = 'RESET_RESPONSE_DATA';

export const SET_ENTIRE_SIGN_UP_FORM_STATE = 'SET_ENTIRE_SIGN_UP_FORM_STATE';
export const REQUEST_RESET_SIGN_UP_FORM = 'REQUEST_RESET_SIGN_UP_FORM';
export const RESET_SIGN_UP_FORM = 'RESET_SIGN_UP_FORM';

// ===================CONSTANT FOR VERIFY CODE FORM ACTIONS ==========================
export const VALIDATE_CODE =  'VALIDATE_CODE';
export const SET_CODE = 'SET_CODE';
export const SET_VERIFY_CODE_RESPONSE = 'SET_VERIFY_CODE_RESPONSE';
export const SUBMIT_VERIFY_CODE_FORM = 'SUBMIT_VERIFY_CODE_FORM';
export const SET_ENTIRE_VERIFY_CODE_FORM_STATE = 'SET_ENTIRE_VERIFY_CODE_FORM_STATE';
export const REQUEST_RESET_VERIFY_CODE_FORM = 'REQUEST_RESET_VERIFY_CODE_FORM';
export const RESET_VERIFY_CODE_FORM = 'RESET_VERIFY_CODE_FORM';

// ========================CONSTANTS FOR SEARCH COURSE ACTIONS ===============================
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const FETCH_SEARCH_COURSE = 'FETCH_SEARCH_COURSE';
export const SET_SEARCH_COURSE_RESULT='SET_SEARCH_COURSE_RESULT';
export const RESET_SEARCH_FORM= 'RESET_SEARCH_FORM';
export const RESET_SEARCH_COURSE_STATE = 'RESET_SEARCH_COURSE_STATE';

// ===========================================================================================
// hotCourses action
export const FETCH_HOT_COURSES = 'FETCH_HOT_COURSES';
export const SET_HOT_COURSES = 'SET_HOT_COURSES';
export const FETCH_HOT_COURSES_FAILURE = 'FETCH_HOT_COURSES_FAILURE';

// latestCourses type
export const FETCH_LATEST_COURSES = 'FETCH_LATEST_COURSES';
export const SET_LATEST_COURSES = 'SET_LATEST_COURSES';
export const FETCH_LATEST_COURSES_FAILURE = 'FETCH_LATEST_COURSES_FAILURE';

// mostViewCourses type
export const FETCH_MOST_VIEW_COURSES = 'FETCH_MOST_VIEW_COURSES';
export const SET_MOST_VIEW_COURSES = 'SET_MOST_VIEW_COURSES';
export const FETCH_MOST_VIEW_COURSES_FAILURE = 'FETCH_MOST_VIEW_COURSES_FAILURE';

// coursesOfLecturer
export const FETCH_LECTURER_COURSES = 'FETCH_LECTURER_COURSES';
export const SET_LECTURER_COURSES = 'SET_LECTURER_COURSES';
export const FETCH_LECTURER_COURSES_FAILURE = 'FETCH_LECTURER_COURSES_FAILURE';
export const UPLOAD_COURSE = 'UPLOAD_COURSE';
export const UPLOAD_COURSE_DONE = 'UPLOAD_COURSE_DONE';
export const UPLOAD_COURSE_FAIL = 'UPLOAD_COURSE_FAIL';
export const SET_LECTURER_COURSE = 'SET_LECTURER_COURSE';

// selected course
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const UPLOAD_COURSE_IMAGE = 'UPLOAD_COURSE_IMAGE';
export const UPLOAD_COURSE_IMAGE_DONE = 'UPLOAD_COURSE_IMAGE_DONE';
export const UPLOAD_COURSE_IMAGE_FAIL = 'UPLOAD_COURSE_IMAGE_FAIL';

// =================== Type Action Course Overview ==========================
export const GET_INFO_VIDEOS ='GET_INFO_VIDEOS';
export const LOAD_VIDEO ='LOAD_VIDEO';
export const FETCH_LOAD_VIDEO = 'FETCH_LOAD_VIDEO';
export const FETCH_COURSE_OVERVIEW = 'FETCH_COURSE_OVERVIEW';
export const SET_COURSE_OVERVIEW = 'SET_COURSE_OVERVIEW';
export const FETCH_COURSE_COMMENT = 'FETCH_COURSE_COMMENT';
export const SET_COURSE_COMMENT = 'SET_COURSE_COMMENT';
export const FETCH_COURSE_LEARNING = 'FETCH_COURSE_LEARNING';
export const SET_COURSE_LEARNING = 'SET_COURSE_LEARNING';
export const FETCH_VIDEO_LEARNING = 'FETCH_VIDEO_LEARNING';
export const SET_VIDEO_LEARNING = 'SET_VIDEO_LEARNING';
export const FETCH_FAVORITE_COURSE = 'FETCH_FAVORITE_COURSE';
export const SET_FAVORITE_COURSE = 'SET_FAVORITE_COURSE';
export const UPDATE_FAVORITE_COURSE = 'UPDATE_FAVORITE_COURSE';
export const SET_REGISTER_COURSE = 'SET_REGISTER_COURSE';
export const FETCH_REGISTER_COURSE = 'FETCH_REGISTER_COURSE';
export const FETCH_IS_REGISTER_COURSE = 'FETCH_IS_REGISTER_COURSE';
export const FETCH_COURSE_ONE_COMMENT = 'FETCH_COURSE_ONE_COMMENT';
export const SET_COURSE_ONE_COMMENT = 'SET_COURSE_ONE_COMMENT';
export const FETCH_UPDATE_COURSE_COMMENT = 'FETCH_UPDATE_COURSE_COMMENT';
export const SET_UPDATE_COURSE_COMMENT = 'SET_UPDATE_COURSE_COMMENT';
//===================================================================

// ================== Action types of Admin and Category===========================
export const FETCH_CATEGORY_DATA = 'FETCH_CATEGORY_DATA';
export const SET_CATEGORY_DATA = 'SET_CATEGORY_DATA'


