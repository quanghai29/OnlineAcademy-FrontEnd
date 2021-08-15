import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fileSize from 'filesize';
import M from 'materialize-css/dist/js/materialize.min.js';
import { uploadVideo } from '../../../redux/actions/chaptersOfCourse';
import classes from './AddVideoModal.module.scss';

const AddVideoModal = () => {
  const dispatch = useDispatch();

  const [disableSubmit, setDisableSubmit] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewVideoUrl, setPreviewVideoUrl] = useState('');
  const [duration, setDuration] = useState(null);
  const [titleVideo, setTitleVideo] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  const { data } = useSelector((state) => state.selectedChapter);
  const { isLoading, error } = useSelector((state) => state.chaptersOfCourse);

  const onChangeInputHandler = (e) => {
    setTitleVideo(e.target.value);
    setDisableSubmit(false);
  };

  const onChangeIsPreview = (e) => {
    setIsPreview(e.target.checked);
  }

  const onchangeUploadVideo = (e) => {
    setSelectedFile(e.target.files[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewVideoUrl(reader.result);

      var media = new Audio(reader.result);
      media.onloadedmetadata = function () {
        setDuration(media.duration);
      };
    };

    reader.readAsDataURL(e.target.files[0]);

    setDisableSubmit(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (data.id) {
      const formData = new FormData();
      formData.append('video', selectedFile);
      formData.append('chapter_id', data.id);
      formData.append('duration', duration);
      formData.append('title', titleVideo);
      formData.append('isPreview', isPreview ? 1 : 0);

      dispatch(uploadVideo(formData));

      if (!isLoading) {
        if (!error) {
          e.target.reset();
          setPreviewVideoUrl('');
          setSelectedFile(null);
          const elem = document.getElementById('add-video-modal');
          const instance = M.Modal.getInstance(elem);
          instance.close();
        }
      }
    } else {
      alert('Please update common Info first');
    }
  };

  return (
    <div id="add-video-modal" className="modal">
      <form onSubmit={onSubmitHandler}>
        <div class="modal-content">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="video-title"
                type="text"
                className="validate"
                onChange={onChangeInputHandler}
              />
              <label htmlFor="video-title">Tiêu đề video</label>
            </div>
            <div className="input-field col s12">
              <p>
                <label>
                  <input type="checkbox" className="filled-in" onChange={onChangeIsPreview} />
                  <span>Cho xem trước</span>
                </label>
              </p>
            </div>
            <div className="input-field col s12">
              <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                  <input
                    type="file"
                    id="video-file"
                    accept="video/mp4,video/x-m4v,video/*"
                    onChange={onchangeUploadVideo}
                    disabled={isLoading}
                  />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </div>
            <div className="input-field col s12">
              {previewVideoUrl && (
                <video
                  type="video/swf"
                  src={previewVideoUrl}
                  className={classes.videoPreview}
                  controls
                ></video>
              )}
              {selectedFile && (
                <p>size: {fileSize(selectedFile.size, { standard: 'iec' })}</p>
              )}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            className="btn waves-effect"
            type="submit"
            disabled={disableSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideoModal;
