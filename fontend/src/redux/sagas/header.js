import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {category} from '../../api/category';

function* fetchUpdateCourseComment() {
  try {
    const decodePayload = JSON.parse(localStorage.getItem('decodePayload'));
    yield put({
      type: actionType.SET_HEADER,
      payload:{
        ...decodePayload
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchHeader() {
  yield takeEvery(actionType.FETCH_HEADER, fetchUpdateCourseComment);
}


function* fetchCategory() {
  try {
    const response = yield call(category.getCategories);
    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_CATEGORY,
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


function* watchFetchCategory() {
  yield takeEvery(actionType.FETCH_CATEGORY, fetchCategory);
}

export default function* HeaderSaga() {
  yield all([
    watchFetchHeader(),
    watchFetchCategory(),
  ])
}