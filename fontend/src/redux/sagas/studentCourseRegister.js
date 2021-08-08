import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {studentCourse} from '../../api/course';

function* fetchStudentCourseRegister() {
  try {
    const response = yield call(studentCourse.getCourseRegister);
    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_STUDENT_COURSE_REGISTER,
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


function* watchFetchStudentCourseRegister() {
  yield takeEvery(actionType.FETCH_STUDENT_COURSE_REGISTER, fetchStudentCourseRegister);
}

export default function* StudentCourseRegister() {
  yield all([
    watchFetchStudentCourseRegister(),
  ])
}