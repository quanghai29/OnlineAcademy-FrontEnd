import React, { useEffect } from 'react'
import SearchCourseResultContainer from "../../components/SearchCourseResult/SearchCourseResultContainer";
import Layout from "../../layout/Layout";
import { useSelector } from "react-redux";


const SearchCourseResult = () => {
  const searchCourseState = useSelector(state => state.searchCourseReducer);
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