import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as categoryActions from "../actions/category"
import {
  FETCH_CATEGORY_DATA,
  REQUEST_EDIT_CATEGORY_ITEM,
  REQUEST_CREATE_CATEGORY_ITEM, 
  REQUEST_DELETE_CATEGORY_ITEM
} from "../constants/actionTypes"
import * as adminApi from "../../api/admin"
import { isEmpty } from "../../utils/common"

function* requestFetchCategory() {
  const result = yield call(adminApi.getCategoryData);

  yield put(categoryActions.setCategory(result));
}

function* watchFetchCategory() {
  yield takeLatest(FETCH_CATEGORY_DATA, requestFetchCategory);
}

function* requestEditCategoryItem(action) {
  const result = yield call(isEmpty, action.data.category_name);
  if (result) {
    const warning = 'Không để trống trường này';
    yield put(categoryActions.setCategoryWarning(warning));
  } else {
    yield put(categoryActions.editCategory(action.data));//edit ở local
    const dataSubmit = {
      category_name: action.data.category_name,
      id: action.data.id,
    }

    yield call(adminApi.editCategoryItem, dataSubmit);
    
  }
}

function* watchEditCategoryItem() {
  yield takeLatest(REQUEST_EDIT_CATEGORY_ITEM, requestEditCategoryItem);
}

function* requestCreateCategoryItem(action) {
  const result = yield call(isEmpty, action.data.category_name);
  let warning = '';
  if (result) {
    warning = 'Không để trống trường này';
    yield put(categoryActions.setCategoryWarning(warning));
  } else {
    const response = yield call(adminApi.createCategoryItem, action.data);
    if(response.code===201){
      yield requestFetchCategory();
      yield put(categoryActions.createCategory());
    }
    if(response.existedItem){
      warning = 'Đã tồn tại danh mục này';
      yield put(categoryActions.setCategoryWarning(warning));
    }
  }
}

function* watchCreateCategoryItem() {
  yield takeLatest(REQUEST_CREATE_CATEGORY_ITEM, requestCreateCategoryItem);
}

function* requestDeleteCategoryItem(action){
  // delete in local
  yield put(categoryActions.deleteCategoryItem(action.data.index));

  yield call(adminApi.deleteCategoryItem,{id:action.data.id});
}

function* watchDeleteCategoryItem(){
  yield takeLatest(REQUEST_DELETE_CATEGORY_ITEM, requestDeleteCategoryItem);
}

export default function* categorySaga() {
  yield all([
    watchFetchCategory(),
    watchEditCategoryItem(),
    watchCreateCategoryItem(),
    watchDeleteCategoryItem()
  ])
}