import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {studentCourse} from '../../api/course';

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
    const response = yield call(studentCourse.addFavoriteCourse, course_id);
    switch (response.status) {
      case 201:
        Swal.fire({
          icon: 'success',
          title: 'Đã thêm vào danh sách yêu thích',
        })
        yield put({
          type: actionType.FETCH_FAVORITE_COURSE,
          payload:{
            course_id: course_id,
            isFavorite: true
          }
        })
        yield put({
          type: actionType.FETCH_STUDENT_COURSE_WATCHLIST
        })
        break;
      case 400 || 401:
        Swal.fire({
          icon: 'error',
          title: response.data.message,
        })
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Server has something error',
        })
        break;
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
    console.log(error);
  }
}


function* deleteFavoriteCourse(course_id){
  try {
    const respone = yield call(studentCourse.deleteFavoriteCourse, course_id);

    switch (respone.status) {
      case 204:
        Swal.fire({
          icon: 'success',
          title: 'Đã xóa khỏi danh sách yêu thích',
        })
        yield put({
          type: actionType.FETCH_FAVORITE_COURSE,
          payload: {
            course_id: course_id,
            isFavorite: false
          }
        })
        yield put({
          type: actionType.FETCH_STUDENT_COURSE_WATCHLIST
        })
        break;
      case 400 || 401:
        Swal.fire({
          icon: 'error',
          title: respone.data.message,
        })
        break;
      default:
        Swal.fire({
          icon: 'error',
          title: 'Server has something error',
        })
        break;
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
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