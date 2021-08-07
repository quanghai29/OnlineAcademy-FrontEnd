import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import {DOMAIN_API} from '../constants/common';
//import appAPI from '../axios/course';

function* fetchCourseOverview(action) {
  try {
    // const response = yield call(function(){
    //   appAPI.get(`/course/${action.payload.course_id}`);
    // })
    // //const response = yield call(axios.get, `${DOMAIN_API}/course/${action.payload.course_id}`);
    // if(response.status === 200){
    //   const data = response.data;
    //   yield put({
    //     type: actionType.SET_COURSE_OVERVIEW,
    //     payload: data
    //   });
    // }

    
    yield call (function* (){
      const response = yield axios.get(
        `${DOMAIN_API}/course/${action.payload.course_id}`,
        {
          headers:
          {
            'x-access-token': localStorage.getItem('accessToken')
          }
        }
      )

      if(response.status === 200){
        const data = response.data;
        yield put({
          type: actionType.SET_COURSE_OVERVIEW,
          payload: data
        });
      }
    })
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchCourseOverview() {
  yield takeEvery(actionType.FETCH_COURSE_OVERVIEW, fetchCourseOverview);
}


function* fetchCourseComment(action) {
  try {
    const response = yield call(axios.get, `${DOMAIN_API}/course/comments/${action.payload.course_id}`);
    if(response.status === 200){
      const data = response.data;
      yield put({
        type: actionType.SET_COURSE_COMMENT,
        payload: data
      });
    }
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchCourseComment() {
  yield takeEvery(actionType.FETCH_COURSE_COMMENT, fetchCourseComment);
}

export default function* CourseOverviewSaga() {
  yield all([
    watchFetchCourseOverview(),
    watchCourseComment(),
  ])
}