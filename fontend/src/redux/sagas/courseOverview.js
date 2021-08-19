import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import { DOMAIN_API } from '../constants/common';
import Swal from 'sweetalert2';
import { courseOverview } from '../../api/course';

function* fetchCourseOverview(action) {
  try {
    yield call(function* () {
      const response = yield axios.get(
        `${DOMAIN_API}/course/${action.payload.course_id}`,
        {
          headers:
          {
            'x-access-token': localStorage.getItem('accessToken')
          }
        }
      )

      if (response.status === 200) {
        const data = response.data;
        yield put({
          type: actionType.SET_COURSE_OVERVIEW,
          payload: data
        });
      }
    })
  } catch (err) {
    yield put({
      type: actionType.ERROR_COURSE_OVERVIEW
    });
  }
}

function* watchFetchCourseOverview() {
  yield takeEvery(actionType.FETCH_COURSE_OVERVIEW, fetchCourseOverview);
}


function* fetchCourseComment(action) {
  try {
    const response = yield call(axios.get, `${DOMAIN_API}/course/comments/${action.payload.course_id}`);
    if (response.status === 200) {
      const data = response.data;

      let student_comment = {};
      if (action.payload.isFeedbacked && localStorage.GelApp_userId) {
        //tìm thông tin feedback của user
        student_comment = data
          .find(comment => comment.student_id === +localStorage.GelApp_userId);
      }

      yield put({
        type: actionType.SET_COURSE_COMMENT,
        payload: {
          data: data,
          isFeedbacked: action.payload.isFeedbacked,
          student_comment: student_comment
        }
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: 'error',
      title: 'Something went wrong',
    })
  }
}

function* watchCourseComment() {
  yield takeEvery(actionType.FETCH_COURSE_COMMENT, fetchCourseComment);
}


function* UpdateViewsCourse(action) {
  try {
    yield call(courseOverview.updateViewsCourse, action.payload.course_id);
  } catch (err) {
    console.log(err);
  }
}

function* watchUpdateViewsCourse() {
  yield takeEvery(actionType.UPDATE_VIEWS_COURSE, UpdateViewsCourse);
}
export default function* CourseOverviewSaga() {
  yield all([
    watchFetchCourseOverview(),
    watchCourseComment(),
    watchUpdateViewsCourse(),
  ])
}