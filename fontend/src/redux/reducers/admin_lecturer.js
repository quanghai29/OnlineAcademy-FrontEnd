import {
  SET_LECTURER_DATA,
  DELETE_LECTURER_ITEM,
  SET_IS_SHOW_LECTURE_FORM_MODAL,
  SET_LECTURER_USERNAME,
  SET_LECTURER_PASSWORD,
  SET_LECTURER_USERNAME_WARNING,
  SET_LECTURER_PASSWORD_WARNING
} from "../constants/actionTypes"

const initialState = {
  lecturers:null,
  indexOfDeletedItem: -1,
  isShowFormModal: false,
  form:{
    username: '',
    password: '',
    usernameWarning: '',
    passwordWarning: ''
  }
}

const adminLecturerReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_LECTURER_DATA:{
      let newState = {
        ...state,
        lecturers: action.data,
        isShowFormModal: false,
        indexOfDeletedItem: -1
      }

      newState.form.username= newState.form.password=
      newState.form.usernameWarning= newState.form.passwordWarning = '';

      return newState;
    }
    case DELETE_LECTURER_ITEM:{
      let newState = {...state};
      newState.lecturers.splice(action.data, 1);
      newState.indexOfDeletedItem = action.data;
      
      return newState;
    }
    case SET_IS_SHOW_LECTURE_FORM_MODAL:{
      let newState ={
        ...state,
        isShowFormModal: action.data
      }
      if(!action.data){
        newState.form.username=newState.form.password=
        newState.form.usernameWarning = newState.form.passwordWarning = '';
        newState.indexOfDeletedItem = -1;
      }
      return newState;
    }
    case SET_LECTURER_USERNAME:{
      let newState = {
        ...state
      }
      newState.form.username = action.data;
      return newState;
    }
    case SET_LECTURER_PASSWORD:{
      let newState = {...state};
      newState.form.password = action.data;
      return newState;
    }
    case SET_LECTURER_USERNAME_WARNING:{
      let newState = {...state};
      newState.form.usernameWarning = action.data;
      return newState;
    }
    case SET_LECTURER_PASSWORD_WARNING:{
      let newState = {...state};
      newState.form.passwordWarning= action.data;
      return newState;
    }
    default:{
      return state;
    }
  }
}

export default adminLecturerReducer;