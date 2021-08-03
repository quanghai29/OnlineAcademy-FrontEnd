import {
  SET_STUDENT_DATA,
  DELETE_STUDENT_ITEM
} from "../constants/actionTypes"

const initialState ={
  students: null,
  indexOfDeletedItem: -1
}

const studentReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_STUDENT_DATA:{
      let newState = {
        ...state,
        students: action.data
      }
      return newState;
    }
    case DELETE_STUDENT_ITEM:{
      let newState = {...state};
      newState.students.splice(action.data, 1);
      newState.indexOfDeletedItem = action.data;
      return newState;
    }
    default:{
      return state;
    }
  }
}

export default studentReducer;