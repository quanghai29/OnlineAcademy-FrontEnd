import * as actionType from '../constants/actionTypes';

export const loadVideo = (data)=>{
  return {
    type: actionType.LOAD_VIDEO,
    payload: data
  }
}

export const fetchloadvideo = (data)=>{
  return {
    type: actionType.FETCH_LOAD_VIDEO
  }
}