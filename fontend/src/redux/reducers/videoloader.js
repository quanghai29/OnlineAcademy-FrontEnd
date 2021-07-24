import * as actionType from '../constants/actionTypes';

const initialState ={
  video_path: ''
}

const videoLoader = (state=initialState, action)=>{
  switch(action.type){
    case actionType.LOAD_VIDEO:
    {
      let newState = {...state};
      newState.video_path = action.payload;

      return newState;
    }
    default:{
      return state
    }
  }

}

export default videoLoader