import {
  SET_LECTURER_DATA
} from "../constants/actionTypes"

const initialState = {
  lecturers:[]
}

const adminLecturerReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_LECTURER_DATA:{
      let newState = {
        ...state,
        lecturers: action.data
      }

      return newState;
    }
    default:{
      return state;
    }
  }
}

export default adminLecturerReducer;