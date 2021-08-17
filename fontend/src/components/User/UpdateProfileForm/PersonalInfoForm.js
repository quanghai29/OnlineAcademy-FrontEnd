import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import Swal from "sweetalert2"
import { updateUserProfile } from '../../../redux/actions/userProfile';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PersonalInfoForm = () => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [detailDesc, setDetailDesc] = useState('');

  const { data, isLoading, error } = useSelector((state) => state.userProfile);

  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (data) {
      setValue('fullname', data.fullname);
      setValue('headline', data.headline);
      setDetailDesc(data.description);
    }
    M.updateTextFields();
  }, [data, setValue]);

  const onChangeInputHandler = (e) => {
    setDisableSubmit(false);
  };

  const onSubmitHandler = async (formData) => {
    formData.description = detailDesc;
    dispatch(updateUserProfile(formData, +data.account_id));
    setDisableSubmit(true);
    if(!isLoading) {
      if(error) {
        Swal.fire({
          title: "Upload Failure",
          text: error,
          icon: 'error',
          confirmButtonText: 'EXIT'
        })
      } else {
        Swal.fire({
          title: "Update Success",
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
    }
  };

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
      <form className="col s12" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="fullname"
              type="text"
              className="validate"
              {...register('fullname')}
              onChange={onChangeInputHandler}
              disabled={isLoading}
            />
            <label className="active" htmlFor="fullname">
              Họ và Tên
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="headline"
              type="text"
              className="validate"
              {...register('headline')}
              onChange={onChangeInputHandler}
              disabled={isLoading}
            />
            <label className="active" htmlFor="headline">
              Mô tả ngắn gọn
            </label>
          </div>
        </div>
        <div className="row">
          <label style={{ marginLeft: 10 }}>Giới thiệu bản thân</label>
          <div className="input-field col s12" onClick={onChangeInputHandler}>
            <ReactQuill
              theme="snow"
              value={detailDesc || ''}
              onChange={setDetailDesc}
              modules={modules}
              formats={formats}
              placeholder="Giới thiệu bản thân"
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              value={data.email}
              disabled
            />
            <label className="active" htmlFor="email">
              Email
            </label>
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

export default PersonalInfoForm;
