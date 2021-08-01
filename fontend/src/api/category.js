import appAPI from "../redux/axios/course";

export const getCategoryData = async()=>{
  const result = await appAPI.get('/admin/category');

  return result.data.categories;
}