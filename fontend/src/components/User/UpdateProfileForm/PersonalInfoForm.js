import React from 'react';

const PersonalInfoForm = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" class="validate" />
            <label htmlFor="first_name">Họ</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" class="validate" />
            <label htmlFor="last_name">Tên</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="brief_desc" type="text" class="validate" />
            <label htmlFor="brief_desc">Mô tả ngắn gọn</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="intro_yourself"
              className="materialize-textarea"
            ></textarea>
            <label htmlFor="intro_yourself">Giới thiệu bản thân</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label htmlFor="email">Email</label>
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

export default PersonalInfoForm;
