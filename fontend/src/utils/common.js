export const isEmpty = (value)=>{
  return value? false : true
}

// export const isExistedCategoryItem = (value, list)=>{
//   console.log('name', value);
//   console.log('list',list);
//   list.forEach(item=>{
//     console.log(item.category_name);
//     if(value.trim().localeCompare(item.category_name)===0)
//       return true;
//   })

//   return false;
// }