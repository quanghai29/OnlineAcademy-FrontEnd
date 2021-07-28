import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import {DOMAIN_API} from '../constants/common';

function* fetchCouseLearning(action) {
  try {
    const response = yield call(axios.get, `${DOMAIN_API}/student/course/learning/${action.payload.course_id}`);
    if(response.status === 200){
      const data = response.data;
      yield put({
        type: actionType.SET_COURSE_LEARNING,
        payload: data
      });
    }
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchCourseLearning() {
  yield takeEvery(actionType.FETCH_COURSE_LEARNING, fetchCouseLearning);
}


function* fetchVideoLearning(action) {
  try {
    yield put({
      type: actionType.SET_VIDEO_LEARNING,
      payload: action.payload.video_source
    });
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}


function* watchFetchVideoLearning() {
  yield takeEvery(actionType.FETCH_VIDEO_LEARNING, fetchVideoLearning);
}

export default function* CourseLearningSaga() {
  yield all([
    watchFetchCourseLearning(),
    watchFetchVideoLearning(),
  ])
}