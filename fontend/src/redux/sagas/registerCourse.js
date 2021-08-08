import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import { studentCourse } from '../../api/course';

function* fectchRegisterCourse(action) {
  try {
    const response = yield call(studentCourse.registerCourse, action.payload);
    switch (response.status) {
      case 201:
        Swal.fire({
          icon: 'success',
          title: 'Đăng ký thành công',
        })
        yield put({
          type: actionType.SET_REGISTER_COURSE,
          payload: {
            statusRegister: response.status,
            isRegister: true,
            course_id: action.payload.course_id
          }
        })
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
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
  }
}

function* watchRegisterCourse() {
  yield takeEvery(actionType.FETCH_REGISTER_COURSE, fectchRegisterCourse);
}

function* fectchIsRegisterCourse(action) {
  try {
    yield put({
      type: actionType.SET_REGISTER_COURSE,
      payload: {
        statusRegister: null,
        isRegister: action.payload.isRegister,
        course_id: action.payload.course_id
      }
    })
  } catch (error) {
    console.log(error);
  }
}

function* watchIsRegisterCourse() {
  yield takeEvery(actionType.FETCH_IS_REGISTER_COURSE, fectchIsRegisterCourse);
}

export default function* RegisterCourseSaga() {
  yield all([
    watchRegisterCourse(),
    watchIsRegisterCourse(),
  ])
}