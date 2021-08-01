import appAPI from "../redux/axios/course";
import Swal from 'sweetalert2';

export const getCategoryData = async () => {
  const result = await appAPI.get('/admin/category');

  return result.data.categories;
}

export const editCategoryItem = async (data) => {
  const result = await appAPI.patch('/admin/category', data);

  return result.data;
}

export const createCategoryItem = async (data) => {
  try {
    const result = await appAPI.post('/admin/category', data);
    if (result.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Create successfully',
        showConfirmButton: false,
        timer: 1000
      })
    }
    return result.data;
  } catch (err) {
    console.log(err);
  }
}