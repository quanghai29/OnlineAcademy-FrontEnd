import { actionTypes } from '../actions/chaptersOfCourse';

const initialState = {
  data: {},
};

const selectedVideo = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_VIDEO:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default selectedVideo;
