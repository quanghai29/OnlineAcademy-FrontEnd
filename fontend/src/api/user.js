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
        console.log(formData);
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
};
