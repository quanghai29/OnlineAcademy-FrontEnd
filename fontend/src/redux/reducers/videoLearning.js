import * as actionType from '../constants/actionTypes';

const initialState = {
  data:{},
  isChangeSource: false,
}

const videoLearning = (state=initialState, action)=>{
  switch(action.type){
    case actionType.SET_VIDEO_LEARNING:
    {
      return {
        ...state,
        data : action.payload,
        isChangeSource : true,
      };
    }
    default:{
      return state
    }
  }

}

export default videoLearning;