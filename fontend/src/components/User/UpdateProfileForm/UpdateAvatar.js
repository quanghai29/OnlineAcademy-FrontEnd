import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserImage } from '../../../redux/actions/userProfile';
import Swal from 'sweetalert2';

const UpdateAvatar = () => {
  const [srcFile, setSrcFile] = useState(
    'assets/images/lecturer/default_image.png'
  );
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    if (data) {
      setSrcFile(`http://localhost:3001/common/media/image/${data.img_source}`);
    }
  }, [data]);

  const onChangeUploadImage = (e) => {
    setSrcFile(URL.createObjectURL(e.target.files[0]));
    setSelectedFile(e.target.files[0]);
    setDisableSubmit(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('account_id', data.account_id);
    dispatch(updateUserImage(formData));
    if (!isLoading) {
      if (error) {
        Swal.fire({
          title: 'Update Image Failure',
          text: error,
          icon: 'error',
          confirmButtonText: 'EXIT',
        });
      } else {
        Swal.fire({
          title: 'Update Image Success',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          setDisableSubmit(true);
        });
      }
    }
  };

  return (
    <div className="row">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col s6">
            <label htmlFor="course-img-file">
              <img src={srcFile} onError={e => {e.target.onerror = null; e.target.src = 'assets/images/lecturer/default_image.png'}} alt="course" style={{ width: '20rem' }} />
            </label>
          </div>
          <div className="col s6">
            <p>
              Tải ảnh của bạn tại đây. File đươc chấp nhận:{' '}
              <strong>jpg, jpeg, png</strong>
            </p>
            <div className="file-field input-field">
              <div className="btn">
                <span>File</span>
                <input
                  type="file"
                  id="course-img-file"
                  accept=".jpg, .jpeg, .png"
                  onChange={onChangeUploadImage}
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s2 offset-s10">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              disabled={disableSubmit}
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateAvatar;
