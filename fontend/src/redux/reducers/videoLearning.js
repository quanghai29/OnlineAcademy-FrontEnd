import * as actionType from '../constants/actionTypes';

const initialState ={
  data: ''
}

const videoLearning = (state=initialState, action)=>{
  switch(action.type){
    case actionType.SET_VIDEO_LEARNING:
    {
      let newState = {...state};
      newState.data = action.payload;

      return newState;
    }
    default:{
      return state
    }
  }

}

export default videoLearning;