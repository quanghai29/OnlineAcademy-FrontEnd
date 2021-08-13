
import appAPI from '../redux/axios/guest';

// #region Quang Hai
export const category = {
  getCategories : async()=>{
    const respone = await appAPI.get(`/category`,{ validateStatus: false })
    return respone;
  },
  getHotCategories: async () => {
    try {
      const { data } = await appAPI.get('/course/category-mostbestseller');
      console.log(data);
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
// #endregion