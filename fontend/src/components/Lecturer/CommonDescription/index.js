import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  uploadCourse,
  updateCommonInfoCourse,
} from '../../../redux/actions/coursesOfLecturer';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classes from './style.module.scss';

const CommonDescription = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [detailDesc, setDetailDesc] = useState('');

  const { uploadingCommonDesc, uploadedCommonDescError, isUpdateCourse } =
    useSelector((state) => state.uploadCourse);
  const { data } = useSelector((state) => state.selectedCourse);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (isUpdateCourse) {
      if (data) {
        setValue('title', data.title || '');
        setValue('short_description', data.short_description || '');
        setValue('category_id', data.category_id || '');
        setValue('price', data.price || '0');
        setValue('discount', data.discount || '0');
        setValue('course_status', data.course_status || '');
        setDetailDesc(data.full_description);
      }
    }
    M.updateTextFields();
  }, [isUpdateCourse, data, setValue]);

  const onSubmit = async (formData) => {
    const { userId } = JSON.parse(localStorage.decodePayload);
    formData.lecturer_id = userId;
    formData.category_id = +formData.category_id;
    formData.course_status = +formData.course_status;
    formData.full_description = detailDesc;
    if (isUpdateCourse) {
      dispatch(updateCommonInfoCourse(formData, data.id));
    } else {
      dispatch(uploadCourse(formData));
    }
    if (!uploadingCommonDesc) {
      if (uploadedCommonDescError) {
        Swal.fire({
          title: 'Upload Failure',
          text: uploadedCommonDescError,
          icon: 'error',
          confirmButtonText: 'EXIT',
        });
      } else {
        Swal.fire({
          title: 'Upload Success',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          setDisableSubmit(true);
        });
      }
    }
  };

  const onChangeInputHandler = (e) => {
    setDisableSubmit(false);
  };

  const requiredStyle = {
    color: 'red',
    fontSize: '10px',
  };

  const onError = (errors, e) => console.log(errors, e);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="course-title"
              type="text"
              className="validate"
              {...register('title', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            />
            {errors.title && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="course-title">Tiêu đề khóa học</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="brief-desc"
              type="text"
              className="validate"
              {...register('short_description', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            />
            {errors.short_description && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="brief-desc">Mô tả ngắn gọn</label>
          </div>
        </div>
        <div className="row">
          <label style={{ marginLeft: 10 }}>Mô tả chi tiết</label>
          <div className={`input-field col s12 ${classes.overwriteMT}`} onClick={onChangeInputHandler}>
            <ReactQuill
              theme="snow"
              value={detailDesc || ''}
              onChange={setDetailDesc}
              modules={modules}
              formats={formats}
              placeholder="Mô tả chi tiết"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <select
              className="browser-default"
              defaultValue=""
              id="category_id"
              {...register('category_id', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            >
              <option value="" disabled>
                Danh Mục
              </option>
              <option value="1">Lập trình Web</option>
              <option value="2">Lập trình di động</option>
              <option value="3">Lập trình game</option>
              <option value="4">Khoa học dữ liệu</option>
              <option value="5">Kiểm thử phần mềm</option>
            </select>
          </div>
          <div className="input-field col s6">
            <select
              className="browser-default"
              defaultValue=""
              id="course_status"
              {...register('course_status')}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            >
              <option value="" disabled>
                Status Course
              </option>
              <option value="0">Chưa hoàn thành</option>
              <option value="1">Đã hoàn thành</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="price"
              type="text"
              className="validate"
              {...register('price', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            />
            {errors.price && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="price">Giá</label>
          </div>
          <div className="input-field col s6">
            <input
              id="discount"
              type="text"
              className="validate"
              {...register('discount', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            />
            {errors.discount && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="discount">Khuyến mãi %</label>
          </div>
        </div>
        <button
          className="btn waves-effect"
          type="submit"
          disabled={disableSubmit}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default CommonDescription;
