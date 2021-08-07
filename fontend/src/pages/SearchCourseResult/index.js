import React, { useEffect } from 'react'
import SearchCourseResultContainer from "../../components/SearchCourseResult/SearchCourseResultContainer";
import Layout from "../../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  useLocation
} from "react-router-dom";
import {
  FETCH_SEARCH_COURSE
} from "../../redux/constants/actionTypes"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchCourseResult = () => {
  const data = useSelector(state => state.searchCourseReducer.courses);
  const dispatch = useDispatch();

  let query = useQuery();
  const text_search = query.get("text_search");
  
  useEffect(()=>{
    dispatch({
      type: FETCH_SEARCH_COURSE,
      payload: text_search
    });
  }, [text_search, dispatch]);

  return (
    <Layout>
      <SearchCourseResultContainer data={data}
      text_search = {text_search}
      />
    </Layout>
  )
}

export default SearchCourseResult