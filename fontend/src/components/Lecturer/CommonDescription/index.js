import React, { useState } from 'react';
import { Select } from 'react-materialize';
import { useDispatch, useSelector } from 'react-redux';
import { uploadCourse } from '../../../redux/actions/coursesOfLecturer';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2"

const CommonDescription = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);

  const {uploadingCommonDesc, uploadedCommonDescError} = useSelector(state => state.uploadCourse);
  const {data} = useSelector(state => state.selectedCourse);
  console.log(data);
  
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    formData.lecturer_id = 2;
    console.log(formData.category_id);
    formData.category_id = +formData.category_id;
    dispatch(uploadCourse(formData));
    if(!uploadingCommonDesc) {
      if(uploadedCommonDescError) {
        Swal.fire({
          title: "Upload Failure",
          text: uploadedCommonDescError,
          icon: 'error',
          confirmButtonText: 'EXIT'
        })
      } else {
        Swal.fire({
          title: "Upload Success",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          setDisableSubmit(true);
        })
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

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              {...register('full_description', { required: true })}
              onChange={onChangeInputHandler}
              disabled={uploadingCommonDesc}
            ></textarea>
            {errors.full_description && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="textarea1">Textarea</label>
          </div>
        </div>
        <div className="row">
          <Select
            id="Select-9"
            multiple={false}
            options={{
              classes: 'col s12',
              dropdownOptions: {
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250,
              },
            }}
            value=""
            {...register('category_id', { required: true })}
            onChange={onChangeInputHandler}
            disabled={uploadingCommonDesc}
          >
            <option disabled value="">
              Chọn danh mục
            </option>
            <option value="1">Lập trình Web</option>
            <option value="2">Lập trình di động</option>
            <option value="3">Lập trình game</option>
            <option value="4">Khoa học dữ liệu</option>
            <option value="5">Kiểm thử phần mềm</option>
          </Select>
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
            <label htmlFor="discount">Khuyến mãi</label>
          </div>
        </div>
        <button class="btn waves-effect" type="submit" disabled={disableSubmit}>
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default CommonDescription;
