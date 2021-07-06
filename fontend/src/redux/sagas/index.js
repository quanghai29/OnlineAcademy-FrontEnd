import { all } from 'redux-saga/effects';
import watchFetchCourse from './getCourses';

export default function* rootSaga() {
    yield all([
        watchFetchCourse(),
    ])
}