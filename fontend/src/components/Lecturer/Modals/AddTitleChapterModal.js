import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { uploadNewChapter } from '../../../redux/actions/chaptersOfCourse';

const AddTitleChapterModal = () => {
  const dispatch = useDispatch();
  
  const [disableSubmit, setDisableSubmit] = useState(true);

  const { data } = useSelector((state) => state.selectedCourse);
  const { isLoading, error } = useSelector((state) => state.chaptersOfCourse);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChangeInputHandler = (e) => {
    setDisableSubmit(false);
  }

  const onSubmitHandler = async (formData) => {
    if(data.id) {
      formData.course_id = data.id;
      dispatch(uploadNewChapter(formData));

      if(!isLoading) {
        if(!error) {
          formData.title = '';
          const elem = document.getElementById('add-chapter-title-modal');
          const instance = M.Modal.getInstance(elem);
          instance.close();
        }
      }
    } else {
      alert('Please update common Info first');
    }
  }

  return (
    <div id="add-chapter-title-modal" className="modal">
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
            {errors.title && (
              <span>This field is required</span>
            )}
            <label htmlFor="chapter-title">Tiêu đề chapter</label>
          </div>
        </div>
       
      </div>
      <div class="modal-footer">
        <button className="btn waves-effect" type="submit" disabled={disableSubmit}>
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
      </form>
    </div>
  );
};

export default AddTitleChapterModal;
