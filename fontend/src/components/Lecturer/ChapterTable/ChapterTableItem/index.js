import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { setSelectedChapter, deleteChapterById } from '../../../../redux/actions/chaptersOfCourse';
import VideoTable from '../../VideoTable';
import EditTitleChapterModal from '../../Modals/EditTitleChapterModal';
import classes from '../styles.module.scss';
import Swal from 'sweetalert2';
import AddVideoModal from '../../Modals/AddVideoModal';
import EditTitleVideoModal from '../../Modals/EditTitleVideoModal';

const ChapterTableItem = ({chapter}) => {
  const dispatch = useDispatch();
  const [isHiddenVideoTable, setIsHiddenVideoTable] = useState(true);

  const onClickBtnHiddenVideo = (e) => {
    setIsHiddenVideoTable(!isHiddenVideoTable);
  };

  useEffect(() => {
    initModal();
  })

  const initModal = () => {
    var elem1 = document.getElementById('edit-chapter-title-modal');
    M.Modal.init(elem1, {});
    var elem2 = document.getElementById('add-video-modal');
    M.Modal.init(elem2, {});
    M.updateTextFields();
  }

  const onClickEditTitleBtnHandler = (e) => {
    dispatch(setSelectedChapter(chapter));
    const elem = document.getElementById('edit-chapter-title-modal');
          const instance = M.Modal.getInstance(elem);
          instance.open();
  }

  const onClickCreateVideoBtnHandler = (e) => {
    dispatch(setSelectedChapter(chapter));
    const elem = document.getElementById('add-video-modal');
          const instance = M.Modal.getInstance(elem);
          instance.open();
  }

  const onClickDeleteChapterBtnHandler = (e) => {
    Swal.fire({
      title: "Warning",
      text: "bạn có chắc muốn xóa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES'
    }).then((result) => {
      if(result.isConfirmed) {
        dispatch(deleteChapterById(chapter.id));
      } 
    })
  }

  return (
    <div className="card">
      <EditTitleChapterModal />
      <AddVideoModal />
      <EditTitleVideoModal />
      <div className={`card-content ${classes.chapterTableItem}`}>
        <div className={classes.titleLeft}>
          <button onClick={onClickBtnHiddenVideo}>{isHiddenVideoTable ? <span className="large material-icons">expand_more</span> : <span className="material-icons">expand_less</span>}</button>
          <h6 className={classes.title}>{chapter.title}</h6>
        </div>
        <div className={classes.titleRight}>
            <button onClick={onClickEditTitleBtnHandler}><span className="material-icons">create</span> Sửa tiêu đề</button>
            <button onClick={onClickCreateVideoBtnHandler}><span className="material-icons">video_call</span> Thêm video</button>
            <button onClick={onClickDeleteChapterBtnHandler}><span className="material-icons">delete_forever</span> Xóa chương</button>
        </div>
      </div>
      <div hidden={isHiddenVideoTable}>
        <VideoTable videos={chapter.videos} />
      </div>
    </div>
  );
};

export default ChapterTableItem;
