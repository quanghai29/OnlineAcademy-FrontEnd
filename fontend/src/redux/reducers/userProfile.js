import * as type from '../constants/actionTypes';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
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
    default:
      return state;
  }
};

export default userProfile;
