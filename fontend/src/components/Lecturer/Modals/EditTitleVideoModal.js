import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateVideoTitle } from '../../../redux/actions/chaptersOfCourse';

const EditTitleVideoModal = () => {
  const dispatch = useDispatch();

  const [disableSubmit, setDisableSubmit] = useState(true);

  const { isLoading, error } = useSelector((state) => state.chaptersOfCourse);
  const { data } = useSelector((state) => state.selectedVideo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue('title', data.title);
    setValue('isPreview', +data.isPreview === 1 ? true : false);
    M.updateTextFields();
  }, [data, setValue]);

  const onChangeInputHandler = (e) => {
    setDisableSubmit(false);
  };

  const onSubmitHandler = async (formData) => {
    if (data.chapter_id) {
      formData.chapter_id = data.chapter_id;
      formData.isPreview = formData.isPreview ? 1 : 0;
      dispatch(updateVideoTitle(formData, data.id));

      if (!isLoading) {
        if (!error) {
          const elem = document.getElementById('edit-video-title-modal');
          const instance = M.Modal.getInstance(elem);
          instance.close();
        }
      }
    }
  };

  return (
    <div id="edit-video-title-modal" className="modal">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div class="modal-content">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="chapter-title"
                type="text"
                className="validate"
                {...register('title', { required: true })}
                onChange={onChangeInputHandler}
                disabled={isLoading}
              />
              {errors.title && <span>This field is required</span>}
              <label htmlFor="chapter-title">Tiêu đề video</label>
            </div>
            <div className="input-field col s12">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    {...register('isPreview')}
                    onChange={onChangeInputHandler}
                    disabled={isLoading}
                  />
                  <span>Cho xem trước</span>
                </label>
              </p>
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

export default EditTitleVideoModal;
