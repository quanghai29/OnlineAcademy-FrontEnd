import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {studentCourse} from '../../api/course';

function* fetchCouseLearning(action) {
  try {
    const response = yield call(studentCourse.getCourseLearning, action.payload.course_id);

    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_COURSE_LEARNING,
          payload: data
        });
        break;
      case 400 || 401:
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
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
    console.log(error)
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
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
    console.log(error)
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