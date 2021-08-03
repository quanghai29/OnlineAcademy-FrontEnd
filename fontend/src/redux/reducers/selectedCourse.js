import * as type from '../constants/actionTypes';

const initialState = {
    data: {}
  };

  const selectedCourse = (state = initialState, action) => {
    switch (action.type) {
      case type.SET_SELECTED_COURSE:
          return {
              ...state,
              data: action.payload
          }
      default:
        return state;
    }
  };
  
  export default selectedCourse;