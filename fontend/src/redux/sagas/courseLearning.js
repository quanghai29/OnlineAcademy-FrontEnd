import { takeEvery, call, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import {studentCourse} from '../../api/course';

function* fetchCouseLearning(action) {
  try {
    const response = yield call(studentCourse.getCourseLearning, action.payload.course_id);

    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_COURSE_LEARNING,
          payload: data
        });
        break;
      case 400 || 401:
        yield put({
          type: actionType.ERROR_COURSE_LEARNING,
          payload:{
            error_message: response.data.message
          }
        })
        // Swal.fire({
        //   icon: 'error',
        //   title: response.data.message,
        // })
        break;
      default:
        yield put({
          type: actionType.ERROR_COURSE_LEARNING,
          payload:{
            error_message: 'Server has something error'
          }
        })
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Server has something error',
        // })
        break;
    }
  } catch (error) {
    yield put({
      type: actionType.ERROR_COURSE_LEARNING,
      payload:{
        error_message: 'Something went wrong',
      }
    })
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Something went wrong',
    // })
    console.log(error)
  }
}

function* watchFetchCourseLearning() {
  yield takeEvery(actionType.FETCH_COURSE_LEARNING, fetchCouseLearning);
}


function* fetchVideoLearning(action) {
  try {
    //call api here
    const response = yield call(studentCourse.getStateVideoLearning, action.payload.video_id)
    switch (response.status) {
      case 200:
        const data = response.data;
        yield put({
          type: actionType.SET_VIDEO_LEARNING,
          payload: {
            ...data,
            video_source: action.payload.video_source,
          }
        });
        break;
      case 400 || 401:
        console.log(response.data.message);
        break;
      default:
        console.log('Server has something error')
        break;
    }
  } catch (error) {
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Something went wrong',
    // })
    console.log(error);
  }
}


function* watchFetchVideoLearning() {
  yield takeEvery(actionType.FETCH_VIDEO_LEARNING, fetchVideoLearning);
}


function* fetchUpdateStateStudentVideoLearning(action) {
  try {
    console.log(action.payload);
    yield call(studentCourse.updateStateVideoLearning, action.payload);
  } catch (error) {
    console.log(error)
  }
}


function* watchFetchUpdateStateStudentVideoLearning() {
  yield takeEvery(actionType.FETCH_UPDATE_STATE_STUDENT_VIDEO, fetchUpdateStateStudentVideoLearning);
}


// function* fetchStateStudentVideoLearning(action) {
//   try {
//     const response = yield call(studentCourse.getStateVideoLearning, action.payload.video_id);
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// }


// function* watchUpdateStateStudentVideoLearning() {
//   yield takeEvery(actionType.FETCH_UPDATE_STATE_STUDENT_VIDEO, fetchStateStudentVideoLearning);
// }

export default function* CourseLearningSaga() {
  yield all([
    watchFetchCourseLearning(),
    watchFetchVideoLearning(),
    watchFetchUpdateStateStudentVideoLearning(),
   // watchUpdateStateStudentVideoLearning(),
  ])
}