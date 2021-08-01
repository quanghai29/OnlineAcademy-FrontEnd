import {
  SET_CATEGORY_DATA,
  FETCH_CATEGORY_DATA,
  SET_CATEGORY_WARNING,
  SUBMIT_CATEGORY_FORM
} from "../constants/actionTypes"

export const setCategory = (data)=>{
  return{
    type: SET_CATEGORY_DATA,
    data
  }
}

export const fetchCategory = ()=>{
  return{
    type: FETCH_CATEGORY_DATA
  }
}

export const setCategoryWarning =(data)=>{
  return{
    type: SET_CATEGORY_WARNING,
    data
  }
}

export const submitCategoryForm = (data)=>{
  return{
    type: SUBMIT_CATEGORY_FORM,
    data
  }
}