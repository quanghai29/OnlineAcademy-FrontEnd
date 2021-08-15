import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';
import PaginationContainer from "../../components/PaginationContainer/PaginationContainer";
import PreLoading from '../../components/PreLoading';
import Swal from 'sweetalert2';

const CourseCategory = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const courseCategory = useSelector(state => state.courseCategory);
  const perPage = 5;
  const [data, setData] = useState(null);
  const [lenData, setLen] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();

  useEffect(function () {
    window.scrollTo(0, 0);
    if (stateLocation && stateLocation.category_id > 0) {
      dispatch({
        type: actionType.FETCH_COURSE_OF_CATEGORY,
        payload: {
          category_id: stateLocation.category_id
        }
      })
    }else{
      setLoading(false);
      setIsError(true);
    }
  }, [dispatch, stateLocation])

  useEffect(function (){
    if(!courseCategory.isLoading){
      setLoading(false);
      setIsError(courseCategory.isError);
    }
  },[courseCategory]);

  useEffect(function(){
    if(courseCategory.data){
      setLen(courseCategory.data.length);

      const newData = courseCategory.data.slice(0, perPage);
      setData(newData);
    }
  },[courseCategory.data])

  const handleClickSelectedPage = (selectedPage) =>{
    const nextPage = selectedPage;
    const indexStart = nextPage * perPage;
    const indexEnd = nextPage * perPage + perPage;

    const newData = courseCategory.data.slice(indexStart, indexEnd);
    setData(newData);
  }

  return (
    isLoading
    ?
      <div>
        <div className={classes.loading}>
          <PreLoading/>
        </div>
        <div>
          <Layout>
            <div className={classes.noneData}></div>
          </Layout>
        </div>
      </div>
    :
    isError
    ?
      <Layout>
        <div className={classes.noneData}>
          {
            Swal.fire({
              title: "Some things is Error",
              icon: "error"
            })
          }
        </div>
      </Layout>
    :
    <Layout>
      <div className="row">
        <div className="col m10 offset-m1">
          <h5 className={classes.cateHeader}>
            {stateLocation && stateLocation.category_name}
            &nbsp;:&nbsp;
            {stateLocation && courseCategory.data.length} khóa học
          </h5>
          <div className="progress">
            <div className="determinate" style={{width: "100%"}} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            data
            &&
            data.map(item => {
              return (
                <div className="card" key={item.id} >
                  <div className="card-content">
                    <RowCourse 
                      data={{ 
                        ...item, 
                        author: item.fullname, 
                        avg_vote:+item.avg_vote,
                        image: {img_source: item.course_img_source}
                      }} 
                    />
                  </div>
                </div>
              )
            })
          }
         
          {
            courseCategory.data
            &&
            courseCategory.data.length === 0
            &&
            <div className={classes.noneData}></div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            courseCategory.data
            &&
            <PaginationContainer 
              pageCount={Math.ceil(lenData / perPage)}
              pageRangeDisplayed={perPage}
              marginPagesDisplayed={2}
              handleClickSelectedPage={(obj)=>handleClickSelectedPage(obj.selected)}
            />
          }
        </div>
      </div>
    </Layout>
  );
};

export default CourseCategory;
