import * as actionType from '../constants/actionTypes';

const initialState ={
  video_id: 0
}

const videoLoader = (state=initialState, action)=>{
  switch(action.type){
    case actionType.SET_VIDEO_LEARNING:
    {
      let newState = {...state};
      newState.video_id = action.payload;

      return newState;
    }
    default:{
      return state
    }
  }

}

export default videoLoader