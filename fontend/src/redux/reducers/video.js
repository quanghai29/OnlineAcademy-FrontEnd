

const initialState ={
  videos: []
}

const videoReducer = (state=initialState, action)=>{
  switch(action.type){
    case 'SET_VIDEO_INFO':{
      let newState = {...state};
      newState.videos = action.payload;

      return newState;
    }
    default:{
      return state
    }
  }

}

export default videoReducer