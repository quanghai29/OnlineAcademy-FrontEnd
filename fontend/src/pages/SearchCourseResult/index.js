import React, { useEffect } from 'react'
import SearchCourseResultContainer from "../../components/SearchCourseResult/SearchCourseResultContainer";
import Layout from "../../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  useLocation
} from "react-router-dom";
import {
  setIsLoading,
  fetchSearchingCourse
} from "../../redux/actions/searchCourse"

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchCourseResult = () => {
  const searchingCourseState = useSelector(state => state.searchCourseReducer);
  const {courses, isLoading} = searchingCourseState;
  const dispatch = useDispatch();

  let query = useQuery();
  const text_search = query.get("text_search");
  
  useEffect(()=>{
    dispatch(fetchSearchingCourse(text_search));
    dispatch(setIsLoading(true));
  }, [text_search, dispatch]);

  return (
    <Layout>
      <SearchCourseResultContainer data={courses} 
      text_search = {text_search} isLoading={isLoading}
      />
    </Layout>
  )
}

export default SearchCourseResult