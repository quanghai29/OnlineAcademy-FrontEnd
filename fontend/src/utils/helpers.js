import moment from 'moment';

export function timeFormart(duration) {
  let str = '';
  if(duration < 60){
    str = 's [giây]';
  }else if(duration > 60 && duration < 3600){
    str = 'm [phút] s [giây]'
  }else{
    str = 'h [giờ] m [phút] s [giây]'
  }
  return moment.unix(duration).utc().format(str);
}

export function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};