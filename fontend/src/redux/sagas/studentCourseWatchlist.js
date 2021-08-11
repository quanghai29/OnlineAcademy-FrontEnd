import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {studentCourse} from '../../api/course';

function* fetchStudentCourseWatchlist() {
  try {
    const response = yield call(studentCourse.getWatchlist);
    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_STUDENT_COURSE_WATCHLIST,
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
      title: 'Some thing went wrong',
    })
    console.error(error)
  }
}


function* watchFetchStudentCourseWatchlist() {
  yield takeEvery(actionType.FETCH_STUDENT_COURSE_WATCHLIST, fetchStudentCourseWatchlist);
}

export default function* StudentCourseWatchlist() {
  yield all([
    watchFetchStudentCourseWatchlist(),
  ])
}