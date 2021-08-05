import { actionTypes } from '../actions/chaptersOfCourse';

const initialState = {
    data: {}
  };

  const selectedChapter = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_SELECTED_CHAPTER:
          return {
              ...state,
              data: action.payload
          }
      default:
        return state;
    }
  };
  
  export default selectedChapter;