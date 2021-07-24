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

const baseHeaders = (config) => ({
  'Content-Type': 'application/json',
  ...config.headers,
});

// Config App Axios
const appAPI = axios.create();
// appAPI.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL
appAPI.defaults.baseURL = 'http://localhost:3001';
appAPI.interceptors.request.use((config) => {
  const token = '';
  return {
    ...config,
    headers: {
      ...baseHeaders(config),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

export default appAPI;
