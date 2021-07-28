import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadCourseImage } from '../../../redux/actions/coursesOfLecturer';
import Swal from "sweetalert2"

const CourseImage = () => {
  const [srcFile, setSrcFile] = useState(
    'assets/images/lecturer/default_image.png'
  );
  const [file, setFile] = useState(null);

  const selectedCourse = useSelector((state) => state.selectedCourse.data);
  const { uploadingCourseImg, uploadedCourseImgError } = useSelector(
    (state) => state.uploadCourse
  );
  const dispatch = useDispatch();

  const onChangeUploadImage = (e) => {
    setSrcFile(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', file);
    formData.append('img_title', selectedCourse.title);
    formData.append('course_id', selectedCourse.id);
    console.log(formData);
    dispatch(uploadCourseImage(formData));
    if(!uploadingCourseImg) {
      if(uploadedCourseImgError) {
        Swal.fire({
          title: "Upload Image Failure",
          text: uploadedCourseImgError,
          icon: 'error',
          confirmButtonText: 'EXIT'
        })
      } else {
        Swal.fire({
          title: "Upload Image Success",
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    }
  };

  return (
    <div className="row">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col s6">
            <label htmlFor="course-img-file">
              <img src={srcFile} alt="course" style={{ width: '20rem' }} />
            </label>
          </div>
          <div className="col s6">
            <p>
              Tải ảnh cho khóa học của bạn tại đây. File đươc chấp nhận:{' '}
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
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseImage;
