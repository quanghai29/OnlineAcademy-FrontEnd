import { all, takeLatest, put, call } from 'redux-saga/effects';
import { fetchData, uploadData, deleteData } from '../../api/chapter';
import {
  actionTypes,
  requestFetchChaptersOfCourseDone,
  requestFetchChaptersOfCourseFail,
  uploadNewChapterDone,
  uploadNewChapterFail,
  updateChapterTitleDone,
  updateChapterTitleFail,
  deleteChapterByIdDone,
  deleteChapterByIdFail,
  uploadVideoDone,
  uploadVideoFail
} from '../actions/chaptersOfCourse';

function* uploadNewVideo(action) {
  try {
    const data = yield call(uploadData.uploadVideo, action.payload);
    console.log('data 1:' + data);
    yield put(uploadVideoDone(data));
  } catch (error) {
    yield put(uploadVideoFail(error.message));
  }
}

function* watchUploadNewVideo() {
  yield takeLatest(actionTypes.UPLOAD_VIDEO, uploadNewVideo);
}

function* deleteChapterById(action) {
  try {
    const data = yield call(deleteData.deleteChapter, action.payload);
    yield put(deleteChapterByIdDone(data));
  } catch (error) {
    yield put(deleteChapterByIdFail(error.message));
  }
}

function* watchDeleteChapterById() {
  yield takeLatest(actionTypes.DELETE_CHAPTER, deleteChapterById);
}

function* requestFetchChapters(action) {
  try {
    const data = yield call(fetchData.fetchChaptersOfCourse, action.payload);
    yield put(requestFetchChaptersOfCourseDone(data));
  } catch (error) {
    yield put(requestFetchChaptersOfCourseFail(error.message));
  }
}

function* watchRequestFetchChapters() {
  yield takeLatest(
    actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE,
    requestFetchChapters
  );
}

function* uploadNewChapter(action) {
  try {
    const data = yield call(uploadData.uploadNewChapter, action.payload);
    console.log('saga chapter: ' + data);
    yield put(uploadNewChapterDone(data));
  } catch (error) {
    yield put(uploadNewChapterFail(error.message));
  }
}

function* watchUploadNewChapter() {
  yield takeLatest(actionTypes.UPLOAD_NEW_CHAPTER, uploadNewChapter);
}

function* updateChapterTitle(action) {
  try {
    const data = yield call(
      uploadData.updateChapterTitle,
      action.payload.formData,
      action.payload.id
    );
    yield put(updateChapterTitleDone(data));
  } catch (error) {
    yield put(updateChapterTitleFail(error.message));
  }
}

function* watchUpdateChapterTitle() {
  yield takeLatest(actionTypes.UPDATE_TITLE_CHAPTER, updateChapterTitle);
}

export default function* chaptersOfCourseSaga() {
  yield all([
    watchRequestFetchChapters(),
    watchUploadNewChapter(),
    watchUpdateChapterTitle(),
    watchDeleteChapterById(),
    watchUploadNewVideo()
  ]);
}
