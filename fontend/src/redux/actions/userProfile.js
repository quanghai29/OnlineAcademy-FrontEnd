import * as type from '../constants/actionTypes';

export const setUserProfile = (data) => ({
  type: type.SET_USER_PROFILE,
  payload: data,
});

export const fetchUserProfile = (user_id) => ({
  type: type.FETCH_USER_PROFILE,
  payload: {
    user_id,
  },
});

export const fetchUserProfileFail = (message) => ({
  type: type.FETCH_USER_PROFILE_FAIL,
  payload: {
    message,
  },
});

export const updateUserProfile = (formData, account_id) => ({
  type: type.UPDATE_MEMBER_PROFILE,
  payload: {
    formData,
    account_id,
  },
});

export const updateUserProfileDone = (user) => ({
  type: type.UPDATE_MEMBER_PROFILE_DONE,
  payload: user,
});

export const updateUserProfileFail = (message) => ({
  type: type.UPDATE_MEMBER_PROFILE_FAIL,
  payload: {
    message,
  },
});

export const updateUserImage = (formData) => ({
  type: type.UPDATE_MEMBER_IMAGE,
  payload: formData,
});

export const updateUserImgDone = (img_source) => ({
  type: type.UPDATE_MEMBER_IMAGE_DONE,
  payload: {
    img_source,
  },
});

export const updateUserImgFail = (message) => ({
  type: type.UPDATE_MEMBER_IMAGE_FAIL,
  payload: {
    message,
  },
});

export const updateUserPassword = (formData) => ({
  type: type.UPDATE_MEMBER_PASSWORD,
  payload: formData,
});

export const updateUserPasswordDone = () => ({
  type: type.UPDATE_MEMBER_PASSWORD_DONE,
});

export const updateUserPasswordFail = (message) => ({
  type: type.UPDATE_MEMBER_PASSWORD_FAIL,
  payload: {
    message,
  },
});

export const setErrorInitial = _ => ({
  type: type.SET_ERROR_INITIAL
})

export const setIsChangePassSuccessInitial = _ => ({
  type: type.SET_ISCHANGEPASSSUCCESS_INITIAL
})