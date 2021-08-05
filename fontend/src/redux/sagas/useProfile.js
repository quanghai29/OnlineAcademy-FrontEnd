import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getProfile, uploadUserProfile } from '../../api/user';
import * as type from '../constants/actionTypes';
import {
  setUserProfile,
  fetchUserProfileFail,
  updateUserProfileDone,
  updateUserProfileFail,
  updateUserImgDone,
  updateUserImgFail,
  updateUserPasswordDone,
  updateUserPasswordFail,
} from '../actions/userProfile';

// fetch user profile
function* fetchUserProfile(action) {
  try {
    const data = yield call(
      getProfile.getDetailInfoUser,
      action.payload.user_id
    );
    yield put(setUserProfile(data));
  } catch (error) {
    yield put(fetchUserProfileFail(error.message));
  }
}

function* watchUserProfile() {
  yield takeLatest(type.FETCH_USER_PROFILE, fetchUserProfile);
}

// update profile
function* updateUserProfile(action) {
  try {
    const data = yield call(
      uploadUserProfile.updateUserProfile,
      action.payload.formData,
      action.payload.account_id
    );
    yield put(updateUserProfileDone(data));
  } catch (error) {
    console.log(error);
    yield put(updateUserProfileFail(error.message));
  }
}

function* watchUpdateUserProfile() {
  yield takeLatest(type.UPDATE_MEMBER_PROFILE, updateUserProfile);
}

// update image
function* updateImage(action) {
  try {
    const data = yield call(uploadUserProfile.updateUserImage, action.payload);
    console.log(data);
    yield put(updateUserImgDone(data.img_source));
  } catch (error) {
    console.log(error);
    yield put(updateUserImgFail(error.message));
  }
}

function* watchUpdateImage() {
  yield takeLatest(type.UPDATE_MEMBER_IMAGE, updateImage);
}

// update password
function* updatePassword(action) {
  try {
    const data = yield call(
      uploadUserProfile.updateUserPassword,
      action.payload
    );
    console.log(data);
    yield put(updateUserPasswordDone());
  } catch (error) {
    console.log(error);
    yield put(updateUserPasswordFail('Password wrong!'));
  }
}

function* watchUpdatePassword() {
  yield takeLatest(type.UPDATE_MEMBER_PASSWORD, updatePassword);
}

export default function* userProfileSaga() {
  yield all([
    watchUserProfile(),
    watchUpdateUserProfile(),
    watchUpdateImage(),
    watchUpdatePassword(),
  ]);
}
