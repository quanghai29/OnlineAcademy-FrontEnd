import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getProfile,uploadUserProfile } from '../../api/user';
import * as type from '../constants/actionTypes';
import {
  setUserProfile, fetchUserProfileFail, updateUserProfileDone, updateUserProfileFail
} from '../actions/userProfile';

function* fetchUserProfile(action) {
  try {
    const data = yield call(getProfile.getDetailInfoUser, action.payload.user_id);
    yield put(setUserProfile(data));
  } catch (error) {
    yield put(fetchUserProfileFail(error.message));
  }
}

function* watchUserProfile() {
  yield takeLatest(type.FETCH_USER_PROFILE, fetchUserProfile);
}

function* updateUserProfile(action) {
  try {
    const data = yield call(uploadUserProfile.updateUserProfile, action.payload.formData, action.payload.account_id);
    yield put(updateUserProfileDone(data));
  } catch (error) {
    console.log(error);
    yield put(updateUserProfileFail(error.message));
  }
}

function* watchUpdateUserProfile() {
  yield takeLatest(type.UPDATE_MEMBER_PROFILE, updateUserProfile);
}

export default function* userProfileSaga() {
  yield all([watchUserProfile(), watchUpdateUserProfile()]);
}
