import * as type from '../constants/actionTypes';

const initialState = {
    data: [],
    isLoading: false,
    error: null
  };

  const coursesOfLecturer = (state = initialState, action) => {
    switch (action.type) {
      case type.SET_LECTURER_COURSES:
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case type.FETCH_LECTURER_COURSES:
        return {
          ...state,
          isLoading: true
        };
      case type.FETCH_LECTURER_COURSES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message
        };
      case type.SET_LECTURER_COURSE:
        return {
          ...state,
          data: [...state.data, action.payload]
        }
      case type.UPDATE_COURSE_COMMON_INFO_DONE: {
        const index = state.data.findIndex(
          (c) => c.id === action.payload.id
        );
        const tempCourse = {...state.data[index],
          title: action.payload.title,
          short_description: action.payload.short_description,
          full_description: action.payload.full_description,
          category_id: action.payload.category_id,
          price: action.payload.price,
          discount: action.payload.discount,
          course_status: action.payload.course_status
        };
        
        return {
          ...state,
          data: [
            ...state.data.slice(0, index),
            tempCourse,
            ...state.data.slice(index + 1)
          ]
        }
      }
      case type.DELETE_COURSE:
        return {
          ...state,
          isLoading: true
        }
      case type.DELETE_COURSE_DONE:
        return {
          ...state,
          isLoading: false,
          data: state.data.filter(c => c.id !== +action.payload)
        }
      case type.DELETE_COURSE_FAIL:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message
        }
      default:
        return state;
    }
  };
  
  export default coursesOfLecturer;