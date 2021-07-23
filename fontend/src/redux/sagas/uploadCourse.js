import { all, takeLatest, put, call } from 'redux-saga/effects';
import { uploadData } from '../../api/course';
import * as type from '../constants/actionTypes';
import { setLecturerCourse } from '../actions/coursesOfLecturer';
import { setSelectedCourse } from '../actions/selectedCourse';

function* uploadCourse(action) {
  try {
    const data = yield call(uploadData.uploadCommonInfo, action.payload);
    // console.log(data);
    yield put(setLecturerCourse(data));
    yield put(setSelectedCourse(data));
  } catch (error) {
    console.log(error);
  }
}

function* watchUploadCourse() {
  yield takeLatest(type.UPLOAD_COURSE, uploadCourse);
}

function* uploadImage(action) {
  try {
    const data = yield call(uploadData.uploadImage, action.payload);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

function* watchUploadImage() {
  yield takeLatest(type.UPLOAD_COURSE_IMAGE, uploadImage);
}

export default function* uploadCourseSaga() {
  yield all([watchUploadCourse(), watchUploadImage()]);
}
