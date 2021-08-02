import appAPI from "../redux/axios/course";
import Swal from 'sweetalert2';

export const getCategoryData = async () => {
  const res = await appAPI.get('/admin/category');

  return res.data.categories;
}

export const editCategoryItem = async (data) => {
  const res = await appAPI.patch('/admin/category', data);

  return res.data;
}

export const createCategoryItem = async (data) => {
  try {
    const res = await appAPI.post('/admin/category', data);
    if (res.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Create successfully',
        showConfirmButton: false,
        timer: 1000
      })
    }
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export const deleteCategoryItem = async(data)=>{
  try{
    appAPI.defaults.headers.common['category_id']=data.id;
    const res = await appAPI.delete('/admin/category');
  }catch(err){
    console.log(err);
  }
}