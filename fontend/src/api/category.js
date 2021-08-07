
import appAPI from '../redux/axios/guest';

// #region Quang Hai
export const category = {
  getCategories : async()=>{
    const respone = await appAPI.get(`/category`,{ validateStatus: false })
    return respone;
  },
}
// #endregion