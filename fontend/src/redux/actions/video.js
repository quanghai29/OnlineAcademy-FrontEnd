const actionTypes ={
  SET_VIDEO_INFO: 'SET_VIDEO_INFO'
}

export const setVideoInfo = (data)=>{
  return {
    type: actionTypes.SET_VIDEO_INFO,
    payload: data
  }
}