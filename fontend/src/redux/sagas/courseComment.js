import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import Swal from 'sweetalert2';
import {studentCourse} from '../../api/course';

function* fetchUpdateCourseComment(action) {
  try {
    const response = yield call(studentCourse.updateCourseComment, action.payload);
    switch (response.status) {
      case 201:
        Swal.fire({
          icon: 'success',
          title: 'Đánh giá của bạn đã được ghi lại',
        })
        yield put({
          type: actionType.FETCH_COURSE_COMMENT,
          payload: {
            course_id: action.payload.course_id,
            isFeedbacked: true,
          }
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

function* watchSetUpdateCourseComment() {
  yield takeEvery(actionType.FETCH_UPDATE_COURSE_COMMENT, fetchUpdateCourseComment);
}

export default function* CourseCommentSaga() {
  yield all([
    //watchSetCourseComment(),
    watchSetUpdateCourseComment()
  ])
}