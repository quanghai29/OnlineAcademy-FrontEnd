import { all } from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import watchFetchHotCourse from './getHotCourses';
import lecturerCoursesSaga from './getCoursesOfLecturer';
import signUpSaga from './signUp';
import verifyCodeSaga from './verifyCode';
import uploadCourseSaga from './uploadCourse';
import loginSaga from './login';
import searchCourseSaga from './searchCourse';
import videoLoaderSaga from './videoloader';
import CourseOverviewSaga from './courseOverview';
import CourseLearningSaga from './courseLearning';
import getCourseSaga from './getCourses';
import userProfileSaga from './useProfile';
import adminCategorySaga from './admin_category';
import FavoriteCourseSaga from './favoriteCourse';
import RegisterCourseSaga from './registerCourse';
import CourseCommentSaga from './courseComment';
import adminStudentSaga from './admin_student';
import adminLecturerSaga from './admin_lecturer';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
        watchFetchHotCourse(),
        lecturerCoursesSaga(),
        watchFetchCourse(),
        signUpSaga(),
        verifyCodeSaga(),
        uploadCourseSaga(),
        loginSaga(),
        searchCourseSaga(),
        videoLoaderSaga(),
        CourseOverviewSaga(),
        CourseLearningSaga(),
        getCourseSaga(),
        userProfileSaga(),
        adminCategorySaga(),
        FavoriteCourseSaga(),
        RegisterCourseSaga(),
        CourseCommentSaga(),
        adminStudentSaga(),
        adminLecturerSaga(),
    ])
}