import React, { useState } from 'react'

const UpdateAvatar = () => {
    const [srcFile, setSrcFile] = useState(
        'assets/images/lecturer/default_image.png'
      );

      const onChangeUploadImage = (e) => {
        setSrcFile(URL.createObjectURL(e.target.files[0]));
      };

    return (
        <div className="row">
      <form>
        <div className="row">
          <div className="col s6">
            <label htmlFor="course-img-file">
              <img src={srcFile} alt="course" style={{ width: '20rem' }} />
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
    )
}

export default UpdateAvatar
