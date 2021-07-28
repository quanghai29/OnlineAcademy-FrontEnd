import React from 'react';
import { Select } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { uploadCourse } from '../../../redux/actions/coursesOfLecturer';
import { useForm } from 'react-hook-form';

const CommonDescription = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.lecturer_id = 1;
    console.log(data.category_id);
    data.category_id = +data.category_id;
    dispatch(uploadCourse(data));
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
            />
            {errors.discount && (
              <span style={requiredStyle}>This field is required</span>
            )}
            <label htmlFor="discount">Khuyến mãi</label>
          </div>
        </div>
        <button class="btn waves-effect" type="submit">
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default CommonDescription;
