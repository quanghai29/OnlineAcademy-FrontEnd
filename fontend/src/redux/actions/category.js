import {
  SET_CATEGORY_DATA,
  FETCH_CATEGORY_DATA,
  SET_CATEGORY_WARNING,
  EDIT_CATEGORY_ITEM,
  CREATE_CATEGORY_ITEM,
  SET_IS_SHOW_FORM_MODAL,
  SET_CATEGORY_INPUT_VALUE,
  REQUEST_DELETE_CATEGORY_ITEM,
  DELETE_CATEGORY_ITEM
} from "../constants/actionTypes"

export const setCategory = (data)=>{
  return{
    type: SET_CATEGORY_DATA,
    data
  }
}

export const fetchCategory = ()=>{
  return{
    type: FETCH_CATEGORY_DATA
  }
}

export const setCategoryWarning =(data)=>{
  return{
    type: SET_CATEGORY_WARNING,
    data
  }
}

export const editCategory = (data)=>{
  return{
    type: EDIT_CATEGORY_ITEM,
    data
  }
}

export const createCategory = ()=>{
  return{
    type: CREATE_CATEGORY_ITEM,
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