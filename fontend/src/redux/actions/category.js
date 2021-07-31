import {
  SET_CATEGORY_DATA,
  FETCH_CATEGORY_DATA
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