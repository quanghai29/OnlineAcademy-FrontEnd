import { all} from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
<<<<<<< HEAD
import signUpSaga from './signUp'
import verifyCodeSaga from './verifyCode';

export default function* rootSaga() {

  yield all([
    watchFetchCourse(),
    signUpSaga(),
    verifyCodeSaga(),
  ]);

=======
import watchFetchHotCourse from './getHotCourses';
import watchFetchLecturerCourse from './getCoursesOfLecturer';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
        watchFetchHotCourse(),
        watchFetchLecturerCourse()
    ])
>>>>>>> 54eebeb5ea482683873a8d7d8f2b53d46aa601e8
}