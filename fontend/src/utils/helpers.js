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