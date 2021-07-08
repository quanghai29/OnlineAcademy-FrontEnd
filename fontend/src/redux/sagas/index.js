import { all } from 'redux-saga/effects';
import watchFetchCourse from './getCourses';
import watchFetchHotCourse from './getHotCourses';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
        watchFetchHotCourse()
    ])
}