import appAPI from "../redux/axios/course";
import Swal from 'sweetalert2';

export const getCategoryData = async () => {
  const res = await appAPI.get('/admin/category');
  return res.data.categories;
}

export const editCategoryItem = async (data) => {
  try {
    const res = await appAPI.patch('/admin/category', data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
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

export const lockStudentItem = async (student_id) => {
  try {
    const result = await appAPI.patch(`/admin/student/lock/${student_id}`);
    console.log('result', result);
  } catch (err) {
    console.log(err);
  }
}

export const unlockStudentItem = async (student_id)=>{
  try {
    const result = await appAPI.patch(`/admin/student/unlock/${student_id}`);
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

export const lockLecturerItem = async (lecturer_id) => {
  try {
    const result = await appAPI.patch(`/admin/lecturer/lock/${lecturer_id}`);
    console.log('res block', result);
  } catch (err) {
    console.log(err);
  }
}

export const unlockLecturerItem = async (lecturer_id) => {
  try {
    const result = await appAPI.patch(`/admin/lecturer/unlock/${lecturer_id}`);
    console.log('res block', result);
  } catch (err) {
    console.log(err);
  }
}

export const createLecturerItem = async(data) => {
  try {
    const res = await appAPI.post('/admin/lecturer', data);
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

export const getCourseData = async()=>{
  try{
    const result = await appAPI.get('/admin/course');
    if(result.status === 200)
      return result.data;
  }catch(err){
    console.log(err);
  }
}

export const lockAdminCourseItem = async(course_id)=>{
  try {
    const result = await appAPI.patch(`/admin/course/lock/${course_id}`);
    console.log('res delete', result);
  } catch (err) {
    console.log(err);
  }
}
export const unlockAdminCourseItem = async(course_id)=>{
  try {
    const result = await appAPI.patch(`/admin/course/unlock/${course_id}`);
    console.log('res delete', result);
  } catch (err) {
    console.log(err);
  }
}
