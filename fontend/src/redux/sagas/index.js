import { all} from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import watchFetchHotCourse from './getHotCourses';
import watchFetchLecturerCourse from './getCoursesOfLecturer';
import signUpSaga from './signUp';
import verifyCodeSaga from './verifyCode';
import uploadCourseSaga from './uploadCourse';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
        watchFetchHotCourse(),
        watchFetchLecturerCourse(),
        watchFetchCourse(),
        signUpSaga(),
        verifyCodeSaga(),
        uploadCourseSaga()
    ])
}