import {
  SET_ADMIN_CATEGORY,
  FETCH_ADMIN_CATEGORY,
  SET_ADMIN_CATEGORY_WARNING,
  SET_IS_SHOW_FORM_MODAL,
  SET_CATEGORY_INPUT_VALUE,
  REQUEST_DELETE_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM,
  SET_ADMIN_CATEGORY_LOADING
} from "../constants/actionTypes"

export const setCategory = (data)=>{
  return{
    type: SET_ADMIN_CATEGORY,
    data
  }
}

export const fetchCategory = ()=>{
  return{
    type: FETCH_ADMIN_CATEGORY
  }
}

export const setCategoryWarning =(data)=>{
  return{
    type: SET_ADMIN_CATEGORY_WARNING,
    data
  }
}

export const submitCategoryForm = (type, data)=>{
  return{
    type,
    data
  }
}

export const setIsShowFormModal = (data)=>{
  return{
    type: SET_IS_SHOW_FORM_MODAL,
    data
  }
}

export const setCategoryInputValue = (data)=>{
  return{
    type: SET_CATEGORY_INPUT_VALUE,
    data
  }
}

export const requestDeleteCategoryItem = (data)=>{
  return{
    type: REQUEST_DELETE_CATEGORY_ITEM,
    data
  }
}

export const deleteCategoryItem = (data)=>{
  return{
    type: DELETE_CATEGORY_ITEM,
    data
  }
}

export const setCategoryLoading = (data)=>{
  return{
    type: SET_ADMIN_CATEGORY_LOADING,
    data
  }
}