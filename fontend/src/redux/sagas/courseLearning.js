import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import { DOMAIN_API } from '../constants/common';
import Swal from 'sweetalert2';

function* fetchCouseLearning(action) {
  try {
    yield call(function* () {
      const response = yield axios.get(
        `${DOMAIN_API}/student/course/learning/${action.payload.course_id}`,
        {
          headers:
          {
            'x-access-token': localStorage.getItem('accessToken')
          }
        }
      )
      switch (response.status) {
        case 200:
          const data = response.data;
          yield put({
            type: actionType.SET_COURSE_LEARNING,
            payload: data
          });
          break;
        case 400:
          Swal.fire({
            icon: 'error',
            title: response.data.message,
          })
          break;
        default:
          Swal.fire({
            icon: 'error',
            title: 'Server has something error',
          })
          break;
      }
    })
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