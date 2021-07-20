import React, {useState} from 'react';

const CourseImage = () => {
  const [file, setFile] = useState('assets/images/lecturer/default_image.png');

  const onChangeUploadImage = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="row">
      <form>
        <div className="col s6">
          <label htmlFor="course-img-file">
            <img
              src={file}
              alt="course"
              style={{ width: '20rem' }}
            />
          </label>
        </div>
        <div className="col s6">
          <p>
            Tải ảnh cho khóa học của bạn tại đây. File đươc chấp nhận: <strong>jpg,
            jpeg, png</strong>
          </p>
          <div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" id="course-img-file" accept=".jpg, .jpeg, .png" onChange={onChangeUploadImage} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseImage;
