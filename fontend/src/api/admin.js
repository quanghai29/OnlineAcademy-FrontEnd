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

export const deleteCategoryItem = async (data) => {
  try {
    appAPI.defaults.headers.common['category_id'] = data.id;
    await appAPI.delete('/admin/category');
  } catch (err) {
    console.log(err);
  }
}

export const getStudentData = async () => {
  try {
    const result = await appAPI.get('/admin/student');
    if (result.status === 200)
      return result.data;
  } catch (err) {
    console.log(err);
  }
}

export const deleteStudentItem = async (student_id) => {
  try {
    appAPI.defaults.headers.common['student_id'] = student_id;
    const result = await appAPI.delete('/admin/student');
    console.log('result', result);
  } catch (err) {
    console.log(err);
  }
}

export const getLecturerData = async () => {
  try {
    const result = await appAPI.get('admin/lecturer');
    if (result.status === 200)
        return result.data;
  } catch (err) {
    console.log(err);
  }
}