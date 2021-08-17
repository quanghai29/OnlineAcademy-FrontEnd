import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Layout from '../../../layout/Layout';
import CommonDescription from '../../../components/Lecturer/CommonDescription';
import CourseImage from '../../../components/Lecturer/CourseImage';
import AddTitleChapterModal from '../../../components/Lecturer/Modals/AddTitleChapterModal';
import ChapterTable from '../../../components/Lecturer/ChapterTable';
import classes from './styles.module.scss';
import WithAuthenticate from '../../../components/HOCs/withAuthenticate';
import { ROLE_LECTURER } from '../../../redux/constants/common';

const UpdateCourse = () => {
  useEffect(function () {
    initTabs();
    initModals();
    initDropdown();
  });

  const initTabs = () => {
    const el = document.getElementById('tabs-update-course');
    M.Tabs.init(el, {});
  };

  const initModals = () => {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});
  }

  const initDropdown = () => {
    const elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {});
  }

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
            <div className="section" style={{ paddingTop: 50 }}>
              <CommonDescription />
            </div>
          </div>
          <div id="course-image" className="col s10 offset-s1">
            <div className="section" style={{ paddingTop: 50 }}>
              <CourseImage />
            </div>
          </div>
          <div id="detail-content" className={`col s10 offset-s1 ${classes.detailContent}`}>
          <div className="section" style={{ paddingTop: 50 }}>
            <button data-target="add-chapter-title-modal" className="waves-effect waves-light btn-small modal-trigger"><i class="material-icons left">add_box</i>Thêm chương mới</button>
            <AddTitleChapterModal />
            <ChapterTable />
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthenticate(UpdateCourse, [ROLE_LECTURER]);
