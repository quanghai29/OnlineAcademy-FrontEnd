import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as categoryActions from "../actions/admin_category"
import {
  FETCH_CATEGORY_DATA,
  REQUEST_EDIT_CATEGORY_ITEM,
  REQUEST_CREATE_CATEGORY_ITEM,
  REQUEST_DELETE_CATEGORY_ITEM
} from "../constants/actionTypes"
import * as adminApi from "../../api/admin"
import * as validateFunctions from "../../utils/validate"

function* requestFetchCategory() {
  const result = yield call(adminApi.getCategoryData);
  yield put(categoryActions.setCategory(result));
}

function* watchFetchCategory() {
  yield takeLatest(FETCH_CATEGORY_DATA, requestFetchCategory);
}

function* requestEditCategoryItem(action) {
  const isEmpty = yield call(validateFunctions.isEmpty, action.data.category_name);
  let warning = '';
  if (isEmpty) {
    warning = 'Không để trống trường này';
    yield put(categoryActions.setCategoryWarning(warning));
  } else {
    const dataSubmit = {
      category_name: action.data.category_name,
      id: action.data.id,
    }
    const result = yield call(adminApi.editCategoryItem, dataSubmit);
    if (result.existedItem) {
      warning = 'Danh mục này đã tồn tại';
      yield put(categoryActions.setCategoryWarning(warning));
    } else {
      yield requestFetchCategory();
    }
  }
}

function* watchEditCategoryItem() {
  yield takeLatest(REQUEST_EDIT_CATEGORY_ITEM, requestEditCategoryItem);
}

function* requestCreateCategoryItem(action) {
  const isEmpty = yield call(validateFunctions.isEmpty, action.data.category_name);
  let warning = '';
  if (isEmpty) {
    warning = 'Không để trống trường này';
    yield put(categoryActions.setCategoryWarning(warning));
  } else {
    const response = yield call(adminApi.createCategoryItem, action.data);
    if (response.code === 201) {
      yield requestFetchCategory();
    }
    if (response.existedItem) {
      warning = 'Danh mục này đã tồn tại';
      yield put(categoryActions.setCategoryWarning(warning));
    }
  }
}

function* watchCreateCategoryItem() {
  yield takeLatest(REQUEST_CREATE_CATEGORY_ITEM, requestCreateCategoryItem);
}

function* requestDeleteCategoryItem(action) {
  // delete in local
  yield put(categoryActions.deleteCategoryItem(action.data.index));
  
  yield call(adminApi.deleteCategoryItem, { id: action.data.id });
}

function* watchDeleteCategoryItem() {
  yield takeLatest(REQUEST_DELETE_CATEGORY_ITEM, requestDeleteCategoryItem);
}

export default function* adminCategorySaga() {
  yield all([
    watchFetchCategory(),
    watchEditCategoryItem(),
    watchCreateCategoryItem(),
    watchDeleteCategoryItem()
  ])
}