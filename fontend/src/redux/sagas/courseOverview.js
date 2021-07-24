import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import {DOMAIN_API} from '../constants/common';

function* fetchCourseOverview(action) {
  try {
    //const response = yield call(axios.get, `${DOMAIN_API}/course/${action.payload.course_id}`);
    // if(response.status === 200){
    //   console.log(response.data);
    // }
    const data = {
      "id": 1,
      "category_id": 1,
      "title": "Lập trình javascript từ cơ bản tới nâng cao",
      "price": 599,
      "discount": 0,
      "lecturer_id": 2,
      "img_id": null,
      "create_date": "20/07/2021",
      "last_update": "07/2021",
      "short_description": null,
      "full_description": null,
      "course_status": 0,
      "lecturer_name": "quang hải",
      "lecturer_headline": "Giảng viên fullstack web",
      "lecturer_description": "Drew Bridewell is a senior design specialist at InVision. He also teaches user experience design on a weekly basis to the community and also has piloted UX design programs for middle schools.",
      "lecturer_imgprofile": null,
      "course_img_source": null,
      "course_img_title": null,
      "chapters": [
        {
          "id": 1,
          "course_id": 1,
          "title": "Giới thiệu",
          "create_date": "2021-05-31T02:53:01.000Z",
          "last_update": "2021-05-31T02:53:01.000Z"
        },
        {
          "id": 2,
          "course_id": 1,
          "title": "Javacript cơ bản",
          "create_date": "2021-05-31T02:57:21.000Z",
          "last_update": "2021-05-31T02:57:21.000Z"
        },
        {
          "id": 3,
          "course_id": 1,
          "title": "Bất đồng bộ trong javscript",
          "create_date": "2021-05-31T02:57:21.000Z",
          "last_update": "2021-05-31T02:57:21.000Z"
        },
        {
          "id": 4,
          "course_id": 1,
          "title": "Javscript với HTML/CSS",
          "create_date": "2021-05-31T02:57:21.000Z",
          "last_update": "2021-05-31T02:57:21.000Z"
        }
      ]
    }
    yield put({
      type: actionType.SET_COURSE_OVERVIEW,
      payload: data
    });
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchCourseOverview() {
  yield takeEvery(actionType.FETCH_COURSE_OVERVIEW, fetchCourseOverview);
}

export default function* CourseOverviewSaga() {
  yield all([
    watchFetchCourseOverview(),
  ])
}