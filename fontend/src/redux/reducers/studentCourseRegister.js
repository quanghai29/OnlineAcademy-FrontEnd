import * as actionType from '../constants/actionTypes';

const initialState = {
  data: []
};

const studentCourseRegister = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_STUDENT_COURSE_REGISTER:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default studentCourseRegister;