import appAPI from '../redux/axios/course';

export const getProfile = {
  getDetailInfoUser: async (user_id) => {
    try {
      const { data } = await appAPI.get(`/account/detail/${user_id}`);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export const uploadUserProfile = {
  updateUserProfile: async (formData, account_id) => {
    try {
      const { fullname, headline, description } = formData;
      const { data } = await appAPI.patch(`/account/detail/${account_id}`, {
        fullname: fullname,
        headline: headline,
        description: description,
      });
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateUserImage: async (formData) => {
    try {
      const { data } = await appAPI.post('/account/image', formData);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  updateUserPassword: async (formData) => {
    try {
      const { data } = await appAPI.post('/account/change-password', formData);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};