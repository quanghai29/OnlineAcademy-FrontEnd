import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as adminApi from "../../api/admin";
import * as adminCourseActions from "../actions/admin_course"
import {
  FETCH_ADMIN_COURSE,
  REQUEST_DELETE_ADMIN_COURSE_ITEM
} from "../constants/actionTypes"

function*fetchAdminCourse(action){
  const data = yield call(adminApi.getCourseData);
  yield put(adminCourseActions.setAdminCourse(data));
}

function* watchFetchAdminCourse(){
  yield takeLatest(FETCH_ADMIN_COURSE, fetchAdminCourse);
}

function* deleteAdminCourseItem(action){
  const {index, id} = action.data;
  yield put(adminCourseActions.deleteAdminCourseItem(index));
  yield call(adminApi.deleteAdminCourseItem, id);
}

function* watchDeleteAdminCourseItem(){
  yield takeLatest(REQUEST_DELETE_ADMIN_COURSE_ITEM, deleteAdminCourseItem);
}

export default function* adminCourseSaga(){
  yield all([
    watchFetchAdminCourse(),
    watchDeleteAdminCourseItem()
  ])
}