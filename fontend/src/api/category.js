import appAPI from "../redux/axios/course";
import Swal from 'sweetalert2';

export const getCategoryData = async()=>{
  const result = await appAPI.get('/admin/category');

  return result.data.categories;
}