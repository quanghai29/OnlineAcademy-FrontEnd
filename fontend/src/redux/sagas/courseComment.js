import { takeEvery, put, all } from 'redux-saga/effects';
//import axios from 'axios';
import * as actionType from '../constants/actionTypes';
//import { DOMAIN_API } from '../constants/common';


function* fetchCourseComment(action) {
  try {
    yield put({
      type: actionType.SET_FAVORITE_COURSE,
      payload: {
        course_id: action.payload.course_id,
        isFavorite: action.payload.isFavorite
      }
    })
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchSetCourseComment() {
  yield takeEvery(actionType.FETCH_COURSE_ONE_COMMENT, fetchCourseComment);
}


function* fetchUpdateCourseComment(action) {
  try {
    yield console.log(action);
    // const response = yield call(axios({
    //   method: 'POST',
    //   url: `${DOMAIN_API}/student/course/learning/${action.payload.course_id}`,
    //   data: action.payload,
    // }));
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchSetUpdateCourseComment() {
  yield takeEvery(actionType.FETCH_UPDATE_COURSE_COMMENT, fetchUpdateCourseComment);
}

export default function* CourseCommentSaga() {
  yield all([
    watchSetCourseComment(),
    watchSetUpdateCourseComment()
  ])
}