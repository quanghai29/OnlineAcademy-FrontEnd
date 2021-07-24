import axios from 'axios'
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:3001';
const instance = axios.create({
  baseURL: baseUrl
});

export const getSearchCourseResult= async (text)=>{
  // gắn accessToken vào headers...
  //call api
  const response = await instance.post('/course/search', {
    text_search: text
  });

  if(response.status===200){
    return response.data.data;
  }else{
    // error
  }
}