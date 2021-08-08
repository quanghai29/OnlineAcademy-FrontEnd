import { actionTypes } from '../actions/chaptersOfCourse';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const chaptersOfCourse = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE_DONE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case actionTypes.REQUEST_FETCH_CHAPTERS_OF_COURSE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case actionTypes.UPLOAD_NEW_CHAPTER:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPLOAD_NEW_CHAPTER_DONE:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case actionTypes.UPLOAD_NEW_CHAPTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case actionTypes.UPDATE_TITLE_CHAPTER:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPDATE_TITLE_CHAPTER_DONE: {
      const index = state.data.findIndex((c) => c.id === +action.payload.id);
      const tempChapter = { ...state.data[index], title: action.payload.title };

      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.slice(0, index),
          tempChapter,
          ...state.data.slice(index + 1),
        ],
      };
    }
    case actionTypes.UPDATE_TITLE_CHAPTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case actionTypes.DELETE_CHAPTER:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_CHAPTER_DONE:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter((c) => c.id !== +action.payload),
      };
    case actionTypes.DELETE_CHAPTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    case actionTypes.UPLOAD_VIDEO:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.UPLOAD_VIDEO_DONE: {
      const index = state.data.findIndex(
        (c) => c.id === +action.payload.chapter_id
      );
      const tempChapter = {
        ...state.data[index],
        videos: [...state.data[index].videos, action.payload],
      };
      return {
        ...state,
        isLoading: false,
        data: [
          ...state.data.slice(0, index),
          tempChapter,
          ...state.data.slice(index + 1),
        ],
      };
    }
    case actionTypes.UPLOAD_VIDEO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
      case actionTypes.UPDATE_TITLE_VIDEO:
        return {
          ...state,
          isLoading: true,
        };
      case actionTypes.UPDATE_TITLE_VIDEO_DONE: {
        const indexChapter = state.data.findIndex((c) => c.id === +action.payload.chapter_id);
        const indexVideo = state.data[indexChapter].videos.findIndex(v => v.id === +action.payload.id);
        const tempVideo = {
          ...state.data[indexChapter].videos[indexVideo],
          title: action.payload.title,
          isPreview: action.payload.isPreview
        };
        const tempChapter = {
          ...state.data[indexChapter],
          videos: [
            ...state.data[indexChapter].videos.slice(0, indexVideo),
            tempVideo,
            ...state.data[indexChapter].videos.slice(indexVideo + 1)
          ]
        };
  
        return {
          ...state,
          isLoading: false,
          data: [
            ...state.data.slice(0, indexChapter),
            tempChapter,
            ...state.data.slice(indexChapter + 1),
          ],
        };
      }
      case actionTypes.UPDATE_TITLE_VIDEO_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message,
        };
        case actionTypes.DELETE_VIDEO:
          return {
            ...state,
            isLoading: true,
          };
        case actionTypes.DELETE_VIDEO_DONE: {
          const indexChapter = state.data.findIndex((c) => c.id === +action.payload.chapter_id);
          const tempChapter = {
            ...state.data[indexChapter],
            videos: [
              ...state.data[indexChapter].videos.filter(v => v.id !== +action.payload.id)
            ]
          };
          return {
            ...state,
            isLoading: false,
            data: [
              ...state.data.slice(0, indexChapter),
            tempChapter,
            ...state.data.slice(indexChapter + 1),
            ],
          };
        }
        case actionTypes.DELETE_VIDEO_FAIL:
          return {
            ...state,
            isLoading: false,
            error: action.payload.message,
          };
    case actionTypes.RESET_CHAPTERS_OF_COURSE:
      return initialState;
    default:
      return state;
  }
};

export default chaptersOfCourse;
