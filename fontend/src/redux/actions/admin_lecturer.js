import {
  FETCH_LECTURER_DATA,
  SET_LECTURER_DATA
} from "../constants/actionTypes"

export const fetchLecturerDat = ()=>{
  return{
    type: FETCH_LECTURER_DATA
  }
}

export const setLecturerData = (data)=>{
  return {
    type: SET_LECTURER_DATA,
    data
  }
}