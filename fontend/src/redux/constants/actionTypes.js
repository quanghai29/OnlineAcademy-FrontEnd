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
export const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE';

// ===================CONSTANT FOR VERIFY CODE FORM ACTIONS ==========================
export const VALIDATE_CODE =  'VALIDATE_CODE';
export const SET_CODE = 'SET_CODE';
export const SET_VERIFY_CODE_RESPONSE = 'SET_VERIFY_CODE_RESPONSE';
export const SUBMIT_VERIFY_CODE_FORM = 'SUBMIT_VERIFY_CODE_FORM';
export const SET_ENTIRE_VERIFY_CODE_FORM_STATE = 'SET_ENTIRE_VERIFY_CODE_FORM_STATE';
export const REQUEST_RESET_VERIFY_CODE_FORM = 'REQUEST_RESET_VERIFY_CODE_FORM';
export const RESET_VERIFY_CODE_FORM = 'RESET_VERIFY_CODE_FORM';

// ========================CONSTANTS FOR SEARCH COURSE ACTIONS ===============================
export const FETCH_SEARCH_COURSE = 'FETCH_SEARCH_COURSE';
export const SET_SEARCH_COURSE_RESULT='SET_SEARCH_COURSE_RESULT';
// export const RESET_SEARCH_COURSE_STATE = 'RESET_SEARCH_COURSE_STATE';

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
export const SET_IS_UPDATE_COURSE = 'SET_IS_UPDATE_COURSE';
export const UPDATE_COURSE_COMMON_INFO = 'UPDATE_COURSE_COMMON_INFO';
export const UPDATE_COURSE_COMMON_INFO_DONE = 'UPDATE_COURSE_COMMON_INFO_DONE';
export const UPDATE_COURSE_COMMON_INFO_FAIL = 'UPDATE_COURSE_COMMON_INFO_FAIL';
export const DELETE_COURSE = 'DELETE_COURSE';
export const DELETE_COURSE_DONE = 'DELETE_COURSE_DONE';
export const DELETE_COURSE_FAIL = 'DELETE_COURSE_FAIL';

// selected course
export const SET_SELECTED_COURSE = 'SET_SELECTED_COURSE';
export const UPLOAD_COURSE_IMAGE = 'UPLOAD_COURSE_IMAGE';
export const UPLOAD_COURSE_IMAGE_DONE = 'UPLOAD_COURSE_IMAGE_DONE';
export const UPLOAD_COURSE_IMAGE_FAIL = 'UPLOAD_COURSE_IMAGE_FAIL';

// userProfile
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';
export const UPDATE_MEMBER_PROFILE = 'UPDATE_MEMBER_PROFILE';
export const UPDATE_MEMBER_PROFILE_DONE = 'UPDATE_MEMBER_PROFILE_DONE';
export const UPDATE_MEMBER_PROFILE_FAIL = 'UPDATE_MEMBER_PROFILE_FAIL';
export const UPDATE_MEMBER_IMAGE = 'UPDATE_MEMBER_IMAGE';
export const UPDATE_MEMBER_IMAGE_DONE = 'UPDATE_MEMBER_IMAGE_DONE';
export const UPDATE_MEMBER_IMAGE_FAIL = 'UPDATE_MEMBER_IMAGE_FAIL';
export const UPDATE_MEMBER_PASSWORD = 'UPDATE_MEMBER_PASSWORD';
export const UPDATE_MEMBER_PASSWORD_DONE = 'UPDATE_MEMBER_PASSWORD_DONE';
export const UPDATE_MEMBER_PASSWORD_FAIL = 'UPDATE_MEMBER_PASSWORD_FAIL';

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

// =================== Type Action HEADER ==================
export const FETCH_HEADER = 'FETCH_HEADER';
export const SET_HEADER = 'SET_HEADER';
//===================================================================

// =================== Type Action LOGOUT ==================
export const FETCH_LOGOUT = 'FETCH_LOGOUT';
export const SET_LOGOUT = 'SET_LOGOUT';
//===================================================================

// =================== Type Action Course of Category ==================
export const FETCH_COURSE_OF_CATEGORY = 'FETCH_COURSE_OF_CATEGORY';
export const SET_COURSE_OF_CATEGORY = 'SET_COURSE_OF_CATEGORY';
//===================================================================

// =================== Type Action Course of Student Register ==================
export const FETCH_STUDENT_COURSE_REGISTER = 'FETCH_STUDENT_COURSE_REGISTER';
export const SET_STUDENT_COURSE_REGISTER = 'SET_STUDENT_COURSE_REGISTER';
//===================================================================

// =================== Type Action Course of Student Register ==================
export const FETCH_STUDENT_COURSE_WATCHLIST = 'FETCH_STUDENT_COURSE_WATCHLIST';
export const SET_STUDENT_COURSE_WATCHLIST = 'SET_STUDENT_COURSE_WATCHLIST';
//===================================================================

// ================== Action types of Admin and Category===========================
export const FETCH_CATEGORY_DATA = 'FETCH_CATEGORY_DATA';
export const SET_CATEGORY_DATA = 'SET_CATEGORY_DATA';
export const REQUEST_EDIT_CATEGORY_ITEM = 'REQUEST_EDIT_CATEGORY_ITEM';
export const REQUEST_CREATE_CATEGORY_ITEM = 'REQUEST_CREATE_CATEGORY_ITEM';
export const SET_CATEGORY_WARNING = 'SET_CATEGORY_WARNING';
export const SUBMIT_CATEGORY_FORM = 'SUBMIT_CATEGORY_FORM';
export const SET_IS_SHOW_FORM_MODAL='SET_IS_SHOW_FORM_MODAL';
export const SET_CATEGORY_INPUT_VALUE = 'SET_CATEGORY_INPUT_VALUE';
export const REQUEST_DELETE_CATEGORY_ITEM = 'REQUEST_DELETE_CATEGORY_ITEM';
export const DELETE_CATEGORY_ITEM = 'DELETE_CATEGORY_ITEM';

// ================== Action types of Admin and Student ===============================
export const FETCH_STUDENT_DATA = 'FETCH_STUDENT_DATA';
export const SET_STUDENT_DATA = 'SET_STUDENT_DATA';
export const REQUEST_DELETE_STUDENT_ITEM = 'REQUEST_DELETE_STUDENT_ITEM';
export const DELETE_STUDENT_ITEM = 'DELETE_STUDENT_ITEM';

// ================== Action types of Admin and Lecturer ===============================
export const FETCH_LECTURER_DATA = 'FETCH_LECTURER_DATA';
export const SET_LECTURER_DATA = 'SET_LECTURER_DATA';
export const REQUEST_DELETE_LECTURER_ITEM = 'REQUEST_DELETE_LECTURER_ITEM';
export const DELETE_LECTURER_ITEM = 'DELETE_LECTURER_ITEM';
export const REQUEST_CREATE_LECTURER_ITEM = 'REQUEST_CREATE_LECTURER_ITEM';
export const SET_IS_SHOW_LECTURE_FORM_MODAL = 'SET_IS_SHOW_LECTURE_FORM_MODAL';
export const SET_LECTURER_USERNAME = 'SET_LECTURER_USERNAME';
export const SET_LECTURER_PASSWORD = 'SET_LECTURER_PASSWORD';
export const SET_LECTURER_USERNAME_WARNING = 'SET_LECTURER_USERNAME_WARNING';
export const SET_LECTURER_PASSWORD_WARNING = 'SET_LECTURER_PASSWORD_WARNING';

// =================== Type Action  Category ==================
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const SET_CATEGORY = 'SET_CATEGORY';
//===================================================================