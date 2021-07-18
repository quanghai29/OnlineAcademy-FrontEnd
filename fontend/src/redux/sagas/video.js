import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { setVideoInfo} from '../actions/video';

function* fetchVideoInfo() {
    // try {
    //     const response = yield call(axios.get, 'http://localhost:5050/courses');
    //     // console.log(response.data);
    //     yield put(setCourse(response.data));
    // } catch (error) {
    //     yield put(fetchCourseFail(error.message));
    // }
    console.log('request set video');
    const temp = [
      {
        id: 1,
        title: "test video"
      }
    ]
    yield put(setVideoInfo(temp));
}

function* watchFetchVideoInfo() {
    yield takeEvery('REQUEST_SET_VIDEO_INFO', fetchVideoInfo);  
}

export default function* videoSaga(){
  yield all([
    watchFetchVideoInfo(),
  ])
}