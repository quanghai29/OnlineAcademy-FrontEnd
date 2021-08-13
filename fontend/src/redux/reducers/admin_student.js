import {
  SET_STUDENT_DATA,
  DELETE_STUDENT_ITEM,
  SET_ADMIN_STUDENT_LOADING
} from "../constants/actionTypes"

const initialState ={
  students: null,
  indexOfDeletedItem: -1,
  isLoading: false
}

const adminStudentReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_STUDENT_DATA:{
      let newState = {
        ...state,
        students: action.data,
        indexOfDeletedItem: -1,
        isLoading: false
      }
      return newState;
    }
    case DELETE_STUDENT_ITEM:{
      let newState = {...state};
      newState.students.splice(action.data, 1);
      newState.indexOfDeletedItem = action.data;
      return newState;
    }
    case SET_ADMIN_STUDENT_LOADING:{
      let newState={
        ...state,
        isLoading: action.data
      }
      return newState;
    }
    default:{
      return state;
    }
  }
}

export default adminStudentReducer;