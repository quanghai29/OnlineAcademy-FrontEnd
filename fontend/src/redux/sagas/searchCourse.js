import { call, takeLatest, all, put } from "@redux-saga/core/effects";
import {
  FETCH_SEARCH_COURSE
} from "../constants/actionTypes"
import {
  getSearchCourseResult
} from "../../api/course"
import {
  setSearchCourseResult,
  resetSearchForm
} from "../actions/searchCourse"

function* requestFetchSearchCourse(action) {
  //check search text
  if (!action.payload) {
    return;
  } else {
    //call api to search 
    const searchResult = yield call(getSearchCourseResult, action.payload);
    yield put(setSearchCourseResult(searchResult));

    //reset search form
    yield put(resetSearchForm());
  }
}

function* watchFetchSearchCourse() {
  yield takeLatest(FETCH_SEARCH_COURSE, requestFetchSearchCourse);
}

export default function* searchCourseSaga() {
  yield all([
    watchFetchSearchCourse(),
  ])
}
