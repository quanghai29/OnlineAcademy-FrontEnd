import * as actionType from '../constants/actionTypes';

const initialState = {
  data: [],
  isFeedbacked: false, // check student have already checked
  student_comment: {} // infomation comment of student
};

const courseComments = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_COMMENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default courseComments;