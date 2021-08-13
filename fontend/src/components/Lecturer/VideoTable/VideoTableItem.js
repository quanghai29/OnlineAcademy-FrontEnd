import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import Swal from 'sweetalert2';
import { timeFormart } from '../../../utils/helpers';
import { setSelectedVideo, deleteVideoById } from '../../../redux/actions/chaptersOfCourse';

import classes from './style.module.scss';

const VideoTableItem = ({ video }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    initModal();
  })

  const initModal = () => {
    var elem1 = document.getElementById('edit-video-title-modal');
    M.Modal.init(elem1, {});
    M.updateTextFields();
  }

  const onClickEditTitleBtnHandler = (e) => {
    dispatch(setSelectedVideo(video));
    const elem = document.getElementById('edit-video-title-modal');
    const instance = M.Modal.getInstance(elem);
    instance.open();
  };

  const onClickDeleteChapterBtnHandler = (e) => {
    Swal.fire({
      title: "Warning",
      text: "Bạn có chắc muốn xóa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES'
    }).then((result) => {
      if(result.isConfirmed) {
        const formData = {};
        formData.chapter_id = video.chapter_id;
        formData.vid_source = video.video_source;
        dispatch(deleteVideoById(video.id, formData));
      } 
    })
  }

  return (
    <Fragment>
      <tr className={classes.videoTableItem}>
        <td className={classes.titleVideo}>
          <span className="material-icons">play_circle_filled</span>{' '}
          {video.title}
        </td>
        <td className={classes.actionVideo}>
            <span>{timeFormart(video.duration)}</span>
          <button onClick={onClickEditTitleBtnHandler}>
            <span className="material-icons">create</span> Sửa tiêu đề
          </button>
          <button onClick={onClickDeleteChapterBtnHandler}>
            <span className="material-icons">delete_forever</span> Xóa video
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default VideoTableItem;
