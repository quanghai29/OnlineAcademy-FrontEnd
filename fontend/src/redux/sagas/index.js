import { all } from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import watchFetchHotCourse from './getHotCourses';
import lecturerCoursesSaga from './getCoursesOfLecturer';
import signUpSaga from './signUp';
import verifyCodeSaga from './verifyCode';
import uploadCourseSaga from './uploadCourse';
import loginSaga from './login';
import searchCourseSaga from './searchCourse';
import CourseOverviewSaga from './courseOverview';
import CourseLearningSaga from './courseLearning';
import getCourseSaga from './getCourses';
import userProfileSaga from './useProfile';
import adminCategorySaga from './admin_category';
import FavoriteCourseSaga from './favoriteCourse';
import RegisterCourseSaga from './registerCourse';
import CourseCommentSaga from './courseComment';
import chaptersOfCourseSaga from './chaptersOfCourse';
import HeaderSaga from './header';
import LogoutSaga from './logout';
import adminStudentSaga from './admin_student';
import adminLecturerSaga from './admin_lecturer';
import CourseCategorySaga from './courseCategory';
import StudentCourseRegister from './studentCourseRegister';
import StudentCourseWatchlist from './studentCourseWatchlist';
import RelatedCourseSaga from './relatedCourse';
import adminCourseSaga from './admin_course';
import forgotPasswordSaga from './forgotPassword';
import categoriesSaga from './categories';

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
        CourseOverviewSaga(),
        CourseLearningSaga(),
        getCourseSaga(),
        userProfileSaga(),
        adminCategorySaga(),
        FavoriteCourseSaga(),
        RegisterCourseSaga(),
        CourseCommentSaga(),
        chaptersOfCourseSaga(),
        HeaderSaga(),
        LogoutSaga(),
        adminStudentSaga(),
        adminLecturerSaga(),
        CourseCategorySaga(),
        StudentCourseRegister(),
        StudentCourseWatchlist(),
        RelatedCourseSaga(),
        adminCourseSaga(),
        forgotPasswordSaga(),
        categoriesSaga()
    ])
}