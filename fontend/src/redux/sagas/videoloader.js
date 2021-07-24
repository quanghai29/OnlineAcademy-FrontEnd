import { takeEvery, call, put, all } from 'redux-saga/effects';
//import axios from 'axios';
import * as actionVideo from '../actions/videoloader';
import * as actionType from '../constants/actionTypes';

function* fetchLoadVideo() {
    try {
        const url = 'http://localhost:3001/common/media/load_video?path=/videos/course/1/film.mp4';
        console.log(url);
        yield put(actionVideo.loadVideo(url));
    } catch (error) {
        console.log('something broken')
    }
}

function* watchLoadVideo() {
    yield takeEvery(actionType.FETCH_LOAD_VIDEO, fetchLoadVideo);  
}

export default function* videoLoaderSaga(){
  yield all([
    watchLoadVideo(),
  ])
}