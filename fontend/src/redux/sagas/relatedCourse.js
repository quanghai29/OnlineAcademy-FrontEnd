import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import {courseOverview} from '../../api/course';

function* fetchRealtedCourse(action) {
  try {
    const response = yield call(courseOverview.relatedCourse, action.payload.category_id);
    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_RELATED_COURSE,
          payload: data
        });
        break;
      default:
        yield put({
          type: actionType.ERROR_RELATED_COURSE
        })
        break;
    }
  } catch (error) {
    // yield put({
    //   type: actionType.ERROR_RELATED_COURSE
    // })
    console.error(error)
  }
}


function* watchFetchRelatedCourse() {
  yield takeEvery(actionType.FETCH_RELATED_COURSE, fetchRealtedCourse);
}

export default function* RelatedCourseSaga() {
  yield all([
    watchFetchRelatedCourse(),
  ])
}