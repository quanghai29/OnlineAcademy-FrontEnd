import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import { DOMAIN_API } from '../constants/common';
import Swal from 'sweetalert2';

function* fectchRegisterCourse(action) {
  try {
    const response = yield call(axios.post, `${DOMAIN_API}/student/course/learning/${action.payload.course_id}`);
    if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng ký thành công',
      })
    }
    yield put({
      type: actionType.SET_REGISTER_COURSE,
      payload: {
        statusRegister: response.status,
        isRegister: true,
        course_id: action.payload.course_id
      }
    })
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
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
    //yield put(fetchCourseFail(error.message));
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