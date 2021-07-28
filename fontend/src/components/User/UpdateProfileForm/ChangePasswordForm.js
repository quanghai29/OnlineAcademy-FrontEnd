import React from 'react';
import { useForm } from 'react-hook-form';

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  let val_new_pass = watch('new_password', '');

  const onSubmitHandler = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="old_password"
              type="password"
              class="validate"
              {...register('old_password', {
                required: 'You must specify a password',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
            />
            {errors.old_password && <p>{errors.old_password.message}</p>}
            <label htmlFor="old_password">Mật khẩu cũ</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="new_password"
              type="password"
              class="validate"
              {...register('new_password', {
                required: 'You must specify a password',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
            />
            {errors.new_password && <p>{errors.new_password.message}</p>}
            <label htmlFor="new_password">Mật khẩu mới</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="repeat_new_pass"
              type="password"
              class="validate"
              {...register('password_repeat', {
                validate: (value) =>
                  value === val_new_pass || 'The passwords do not match',
              })}
            />
            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
            <label htmlFor="repeat_new_pass">Nhập lại mật khẩu mới</label>
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

export default ChangePasswordForm;
