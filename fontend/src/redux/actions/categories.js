export const actionTypes = {
    SET_HOT_CATEGORIES: 'SET_HOT_CATEGORIES',
    FETCH_HOT_CATEGORIES: 'FETCH_HOT_CATEGORIES',
    FETCH_HOT_CATEGORIES_FAILURE: 'FETCH_HOT_CATEGORIES_FAILURE'
}

export const setHotCategories = (data) => ({
    type: actionTypes.SET_HOT_CATEGORIES,
    payload: data,
  });
  
  export const fetchHotCategories = () => ({
    type: actionTypes.FETCH_HOT_CATEGORIES,
  });
  
  export const fetchHotCategoriesFail = (message) => ({
    type: actionTypes.FETCH_HOT_CATEGORIES_FAILURE,
    payload: {
      message,
    },
  });