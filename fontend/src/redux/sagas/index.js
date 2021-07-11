import { all} from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import signUpSaga from './signUp'
import verifyCodeSaga from './verifyCode';

export default function* rootSaga() {

  yield all([
    watchFetchCourse(),
    signUpSaga(),
    verifyCodeSaga(),
  ]);

}