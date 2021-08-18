import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as adminApi from "../../api/admin";
import * as adminCourseActions from "../actions/admin_course"
import {
  FETCH_ADMIN_COURSE,
  REQUEST_LOCK_ADMIN_COURSE_ITEM,
  REQUEST_UNLOCK_ADMIN_COURSE_ITEM
} from "../constants/actionTypes"

function*fetchAdminCourse(){
  const data = yield call(adminApi.getCourseData);
  yield put(adminCourseActions.setAdminCourse(data));
}

function* watchFetchAdminCourse(){
  yield takeLatest(FETCH_ADMIN_COURSE, fetchAdminCourse);
}

function* requestLockAdminCourseItem(action){
  yield call(adminApi.lockAdminCourseItem, action.data);
  yield put(adminCourseActions.setCourseLoading(true));
  yield fetchAdminCourse();
}

function* watchLockAdminCourseItem(){
  yield takeLatest(REQUEST_LOCK_ADMIN_COURSE_ITEM, requestLockAdminCourseItem);
}

function* requestUnlockAdminCourseItem(action){
  yield call(adminApi.unlockAdminCourseItem, action.data);
  yield put(adminCourseActions.setCourseLoading(true));
  yield fetchAdminCourse();
}

function* watchUnlockAdminCourseItem(){
  yield takeLatest(REQUEST_UNLOCK_ADMIN_COURSE_ITEM, requestUnlockAdminCourseItem);
}

export default function* adminCourseSaga(){
  yield all([
    watchFetchAdminCourse(),
    watchLockAdminCourseItem(),
    watchUnlockAdminCourseItem()
  ])
}