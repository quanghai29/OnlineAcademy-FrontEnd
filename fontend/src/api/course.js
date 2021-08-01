import appAPI from '../redux/axios/course';

export const uploadData = {
  uploadCommonInfo: async (info) => {
    try {
      const { data } = await appAPI.post('/lecturer/course', info);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  uploadImage: async (info) => {
    try {
      const { data } = await appAPI.post('/lecturer/image', info);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export const getCourses = {
  getLatestCourses: async () => {
    try {
      const { data } = await appAPI.get('/course/10-latest');
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  getMostViewCourses: async () => {
    try {
      const { data } = await appAPI.get('/course/10-mostview');
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  getCoursesByLecturerId: async (lecturer_id) => {
    try {
      const { data } = await appAPI.get(`/lecturer/course/${lecturer_id}`);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export const getSearchCourseResult = async (text) => {
  // gắn accessToken vào headers...
  //call api
  const response = await appAPI.post('/course/search', {
    text_search: text,
  });

  if (response.status === 200) {
    return response.data.data;
  } else {
    // error
  }
};
