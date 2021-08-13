import axios from 'axios';
import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import {DOMAIN_API} from '../constants/common';
import Swal from 'sweetalert2';

function* fetchCourseOfCategory(action) {
  try {
    if(action.payload.cagtegory_id === null)
      return;
    const response = yield call(axios.get, `${DOMAIN_API}/course?category_id=${action.payload.category_id}`);
    if(response.status === 200){
      const data = response.data;
      yield put({
        type: actionType.SET_COURSE_OF_CATEGORY,
        payload: data
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
    console.log(error);
  }
}


function* watchFetchCourseCategory() {
  yield takeEvery(actionType.FETCH_COURSE_OF_CATEGORY, fetchCourseOfCategory);
}

export default function* CourseCategorySaga() {
  yield all([
    watchFetchCourseCategory(),
  ])
}