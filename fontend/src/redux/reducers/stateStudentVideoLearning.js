import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {
    video_id: 0,
    student_id: 0,
    current_time: 0, 
    status_completed: 0
  }
};

const stateStudentVideoLearning = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_STATE_STUDENT_VIDEO:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default stateStudentVideoLearning;