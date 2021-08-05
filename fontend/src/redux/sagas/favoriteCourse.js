import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import { DOMAIN_API } from '../constants/common';


function* updateFavoriteCourse(action) {
  try {
    if(action.payload.isFavorite === true){
      yield addFavoriteCourse(action.payload.course_id);
    }else{
      yield deleteFavoriteCourse(action.payload.course_id);
    }
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchUpdateFavoriteCourse() {
  yield takeEvery(actionType.UPDATE_FAVORITE_COURSE, updateFavoriteCourse);
}


function* addFavoriteCourse(course_id){
  try {
    const response = yield call(axios.post, `${DOMAIN_API}/student/watchlist/${course_id}`);
    if(response.status === 201){
      //Thêm thành công
      yield put({
        type: actionType.FETCH_FAVORITE_COURSE,
        payload:{
          course_id: course_id,
          isFavorite: true
        }
      })
    }else{
      //Thêm thất bại
    }
  } catch (error) {
    console.log(error);
  }
}


function* deleteFavoriteCourse(course_id){
  try {
    const response = yield call(axios.delete, `${DOMAIN_API}/student/watchlist/${course_id}`);
    if(response.status === 204){
      //Xóa thành công
      yield put({
        type: actionType.FETCH_FAVORITE_COURSE,
        payload: {
          course_id: course_id,
          isFavorite: false
        }
      })
    }else{
      //Xóa thất bại
    }
  } catch (error) {
    console.log(error);
  }
}


function* fectchFavoriteCourse(action) {
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

function* watchSetFavoriteCourse() {
  yield takeEvery(actionType.FETCH_FAVORITE_COURSE, fectchFavoriteCourse);
}

export default function* FavoriteCourseSaga() {
  yield all([
    watchUpdateFavoriteCourse(),
    watchSetFavoriteCourse(),
  ])
}