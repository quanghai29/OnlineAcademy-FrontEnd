import * as actionType from '../constants/actionTypes';

const initialState = {
  data: []
};

const studentCourseWatchlist = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_STUDENT_COURSE_WATCHLIST:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default studentCourseWatchlist;