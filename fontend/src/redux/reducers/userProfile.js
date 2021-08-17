import * as type from '../constants/actionTypes';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
  isChangePassSuccess: false
};

const userProfile = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER_PROFILE:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case type.FETCH_USER_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case type.FETCH_USER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case type.UPDATE_MEMBER_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case type.UPDATE_MEMBER_PROFILE_DONE:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          fullname: action.payload.fullname,
          headline: action.payload.headline,
          description: action.payload.description,
        },
      };
    case type.UPDATE_MEMBER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      }
    case type.UPDATE_MEMBER_IMAGE:
      return {
        ...state,
        isLoading: true
      }
    case type.UPDATE_MEMBER_IMAGE_DONE:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          img_source: action.payload.img_source
        }
      }
    case type.UPDATE_MEMBER_IMAGE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.mesage
      }
    case type.UPDATE_MEMBER_PASSWORD:
      return {
        ...state,
        isLoading: true
      }
    case type.UPDATE_MEMBER_PASSWORD_DONE:
      return {
        ...state,
        isLoading: false,
        isChangePassSuccess: true
      }
    case type.UPDATE_MEMBER_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      }
    case type.SET_ERROR_INITIAL:
      return {
        ...state,
        error: initialState.error
      }
    case type.SET_ISCHANGEPASSSUCCESS_INITIAL:
      return {
        ...state,
        isChangePassSuccess: false
      }
    default:
      return state;
  }
};

export default userProfile;
