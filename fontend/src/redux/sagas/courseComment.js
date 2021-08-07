import { takeEvery, put, all, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import { DOMAIN_API } from '../constants/common';
import Swal from 'sweetalert2';

// function* fetchCourseComment(action) {
//   try {
//     yield put({
//       type: actionType.SET_FAVORITE_COURSE,
//       payload: {
//         course_id: action.payload.course_id,
//         isFavorite: action.payload.isFavorite
//       }
//     })
//   } catch (error) {
//     //yield put(fetchCourseFail(error.message));
//   }
// }

// function* watchSetCourseComment() {
//   yield takeEvery(actionType.FETCH_COURSE_ONE_COMMENT, fetchCourseComment);
// }

function* fetchUpdateCourseComment(action) {
  try {
    yield call(function* () {
      const respone = yield axios.post(
        `${DOMAIN_API}/student/course/comment`,
        action.payload,
        {
          headers:{
            'x-access-token': localStorage.getItem('accessToken')
          }
        }
      );

      switch (respone.status) {
        case 201:
          Swal.fire({
            icon: 'success',
            title: 'Đánh giá của bạn đã được ghi lại',
          })
          yield put({
            type: actionType.FETCH_COURSE_COMMENT,
            payload: {
              course_id: action.payload.course_id
            }
          })
          break;
        case 400:
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
    })
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchSetUpdateCourseComment() {
  yield takeEvery(actionType.FETCH_UPDATE_COURSE_COMMENT, fetchUpdateCourseComment);
}

export default function* CourseCommentSaga() {
  yield all([
    //watchSetCourseComment(),
    watchSetUpdateCourseComment()
  ])
}