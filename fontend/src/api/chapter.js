import appAPI from '../redux/axios/course';

export const fetchData = {
    fetchChaptersOfCourse: async (course_id) => {
        try {
            const { data } = await appAPI.get(`/lecturer/chapter/${course_id}`);
            return data;
          } catch (err) {
            throw new Error(err.message);
          }
    }
}

export const uploadData = {
  uploadNewChapter: async (formData) => {
    try {
      const { data } = await appAPI.post('/lecturer/chapter', formData);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateChapterTitle: async (formData, id) => {
    try {
      const {title} = formData;
      const { data } = await appAPI.patch(`/lecturer/chapter/${id}`, {title: title});
      data.id = id;
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}