import { all, takeLatest, put, call } from 'redux-saga/effects';
import { category } from '../../api/category';
import { actionTypes } from '../actions/categories';
import {
  setHotCategories,
  fetchHotCategoriesFail
} from '../actions/categories';

function* requestFetchHotCategories(action) {
  try {
    const data = yield call(category.getHotCategories);
    yield put(setHotCategories(data));
  } catch (error) {
    yield put(fetchHotCategoriesFail(error.message));
  }
}

function* watchRequestFetchHotCategories() {
  yield takeLatest(actionTypes.FETCH_HOT_CATEGORIES, requestFetchHotCategories);
}

export default function* categoriesSaga() {
  yield all([watchRequestFetchHotCategories()]);
}
