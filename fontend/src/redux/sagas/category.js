import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as categoryActions from "../actions/category"
import {
  FETCH_CATEGORY_DATA
} from "../constants/actionTypes"
import * as categoryApi from "../../api/category"

function* requestFetchCategory(){
  const result = yield call(categoryApi.getCategoryData);

  yield put(categoryActions.setCategory(result));
}

function* watchFetchCategory(){
  yield takeLatest(FETCH_CATEGORY_DATA, requestFetchCategory);
}

export default function* categorySaga() {
  yield all([
    watchFetchCategory(),

  ])
}