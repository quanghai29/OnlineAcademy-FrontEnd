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
  },
  uploadVideo: async (formData) => {
    try {
      const { data } = await appAPI.post('/lecturer/video', formData);
      console.log(data);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateVideoTitle: async (formData, id) => {
    try {
      const {title, isPreview} = formData;
      const { data } = await appAPI.patch(`/lecturer/video/${id}`, {title: title, isPreview: isPreview});
      data.chapter_id = formData.chapter_id;
      data.id = id;
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
}

export const deleteData = {
  deleteChapter: async (id) => {
    try {
      const { data } = await appAPI.delete(`/lecturer/chapter/${id}`);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteVideo: async (id, formData) => {
    try {
      const {vid_source} = formData;
      console.log(formData);
      const { data } = await appAPI.delete(`/lecturer/video/${id}`, {data: {vid_source: vid_source}});
      const entity = {};
      entity.id = data;
      entity.chapter_id = formData.chapter_id;
      return entity;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}