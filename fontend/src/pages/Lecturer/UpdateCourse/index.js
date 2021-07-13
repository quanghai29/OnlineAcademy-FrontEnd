import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Layout from '../../../layout/Layout';
import CommonDescription from '../../../components/Lecturer/CommonDescription';

const UpdateCourse = () => {
  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById('tabs-update-course');
    M.Tabs.init(el, {});
  };

  return (
    <Layout>
      <div className="container">
        <div className="row card">
          <div className="col s12">
            <ul id="tabs-update-course" className="tabs">
              <li className="tab col s3">
                <a className="active" href="#common-description">
                  Mô tả chung
                </a>
              </li>
              <li className="tab col s3">
                <a href="#course-image">Hình ảnh khóa học</a>
              </li>
              <li className="tab col s3">
                <a href="#detail-content">Nội dung chi tiết</a>
              </li>
            </ul>
          </div>
          <div id="common-description" className="col s10 offset-s1">
            <div className="section" style={{paddingTop: 50}}>
              <CommonDescription />
            </div>
          </div>
          <div id="course-image" className="col s10 offset-s1">
            Test 2
          </div>
          <div id="detail-content" className="col s10 offset-s1">
            Test 4
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateCourse;
