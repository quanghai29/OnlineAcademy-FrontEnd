import appAPI from '../redux/axios/course';
import guestAPI from '../redux/axios/guest';

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
  updateCommonInfoCourse: async (formData, course_id) => {
    try {
      const { title, short_description, full_description, category_id, price, discount, course_status } = formData;
      const { data } = await appAPI.patch(`/lecturer/course/${course_id}`, {
        title, short_description, full_description, category_id, price, discount, course_status
      });
      data.id = course_id;
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

export const deleteCourses = {
  deleteCourseById: async (id) => {
    try {
      const response = await appAPI.delete(`/lecturer/course/${id}`);
      console.log(response);
      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

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
  getHotCourses: async () => {
    try {
      const { data } = await appAPI.get('/course/outstanding');
      return data.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
};

export const getSearchCourseResult = async (text) => {
  //call api
  const response = await appAPI.post('/course/search', {
    text_search: text,
  });

  if (response.status === 200) {
    return response.data.data.courses;
  } else {
    // error
  }
};

// #region Quang Hai
export const studentCourse = {
  registerCourse : async(payload)=>{
    const respone = await appAPI.post(`/student/course/learning`, payload,{ validateStatus: false })
    return respone;
  },
  addFavoriteCourse: async(course_id)=>{
    const respone = await appAPI.post(`/student/watchlist`,{course_id},{ validateStatus: false })
    return respone;
  },
  deleteFavoriteCourse: async(course_id)=>{
    const respone = await appAPI.delete(`/student/watchlist/${course_id}`,{ validateStatus: false })
    return respone;
  },
  getCourseLearning: async(course_id)=>{
    const respone = await appAPI.get(`/student/course/learning/${course_id}`,{ validateStatus: false })
    return respone;
  },
  updateCourseComment: async(payload)=>{
    const respone = await appAPI.post(`/student/course/comment`, payload,{ validateStatus: false })
    return respone;
  },
  getCourseRegister: async()=>{
    const respone = await appAPI.get(`/student/course/register`,{ validateStatus: false })
    return respone;
  },
  getWatchlist: async()=>{
    const respone = await appAPI.get(`/student/watchlist`,{ validateStatus: false })
    return respone;
  },
  updateStateVideoLearning: async(payload)=>{
    const respone = await appAPI.post(`/student/course/video/update-state`, payload, { validateStatus: false })
    return respone;
  },
  getStateVideoLearning: async(video_id)=>{
    const respone = await appAPI.get(`/student/course/video/update-state/${video_id}`, { validateStatus: false })
    return respone;
  },
}

export const courseOverview = {
  relatedCourse : async(category_id)=>{
    const respone = await guestAPI.get(`/course/bestseller-category/${category_id}` ,{ validateStatus: false })
    return respone;
  },
  updateViewsCourse : async(course_id)=>{
    const respone = await guestAPI.post(`/course/watch-course` ,{course_id},{ validateStatus: false })
    return respone;
  },
}

// #endregion