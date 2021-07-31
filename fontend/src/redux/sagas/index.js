import { all} from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import watchFetchHotCourse from './getHotCourses';
import watchFetchLecturerCourse from './getCoursesOfLecturer';
import signUpSaga from './signUp';
import verifyCodeSaga from './verifyCode';
import uploadCourseSaga from './uploadCourse';
import loginSaga from './login';
import searchCourseSaga from './searchCourse';
import videoLoaderSaga from './videoloader';
import CourseOverviewSaga from './courseOverview';
import CourseLearningSaga from './courseLearning';
import FavoriteCourseSaga from './favoriteCourse';
import RegisterCourseSaga from './registerCourse';
import CourseCommentSaga from './courseComment';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
        watchFetchHotCourse(),
        watchFetchLecturerCourse(),
        watchFetchCourse(),
        signUpSaga(),
        verifyCodeSaga(),
        uploadCourseSaga(),
        loginSaga(),
        searchCourseSaga(),
        videoLoaderSaga(),
        CourseOverviewSaga(),
        CourseLearningSaga(),
        FavoriteCourseSaga(),
        RegisterCourseSaga(),
        CourseCommentSaga(),
    ])
}