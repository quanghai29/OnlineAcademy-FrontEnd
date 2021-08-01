import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as categoryActions from "../actions/category"
import {
  FETCH_CATEGORY_DATA,
  SET_CATEGORY_WARNING,
} from "../constants/actionTypes"
import * as categoryApi from "../../api/category"
import {isEmpty} from "../../utils/common"

function* requestFetchCategory(){
  const result = yield call(categoryApi.getCategoryData);

  yield put(categoryActions.setCategory(result));
}

function* watchFetchCategory(){
  yield takeLatest(FETCH_CATEGORY_DATA, requestFetchCategory);
}

function*requestSubmitCategoryForm (action){
  const result = yield call(isEmpty(action.value));
  if(result){
    const warning = 'Không để trống trường này';
    yield put(categoryActions.setCategoryWarning(warning));
  }else{
    yield put(categoryActions.setCategoryWarning(''));
    
  }
}

function* watchSubmitCategoryForm(){
  yield takeLatest(SET_CATEGORY_WARNING, requestSubmitCategoryForm);
}

export default function* categorySaga() {
  yield all([
    watchFetchCategory(),
    watchSubmitCategoryForm(),
  ])
}