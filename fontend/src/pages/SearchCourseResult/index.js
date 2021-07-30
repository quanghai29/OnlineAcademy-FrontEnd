import React, { useEffect } from 'react'
import SearchCourseResultContainer from "../../components/SearchCourseResult/SearchCourseResultContainer";
import Layout from "../../layout/Layout";
import {
  useLocation
} from "react-router-dom";
import { resetSearchCourseState } from "../../redux/actions/searchCourse"
import { useDispatch, useSelector } from "react-redux";


const SearchCourseResult = () => {
  const searchCourseState = useSelector(state => state.searchCourseReducer);
  //const dispatch = useDispatch();

  // let location = useLocation();
  // useEffect(() => {
  //   dispatch(resetSearchCourseState());
  // }, [location, dispatch]);

  useEffect(() => {
    let elmnt = document.getElementById("search_result");
    if (elmnt)
      elmnt.scrollIntoView();
  }, [searchCourseState.result]);

  return (
    <Layout>
      <SearchCourseResultContainer isSearched = {searchCourseState.isSearched}
        data={searchCourseState.result} />
    </Layout>
  )
}

export default SearchCourseResult