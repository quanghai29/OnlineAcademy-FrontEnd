import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../../redux/actions/userProfile';
import M from 'materialize-css/dist/js/materialize.min.js';
import Layout from '../../../layout/Layout';
import PersonalInfoForm from '../../../components/User/UpdateProfileForm/PersonalInfoForm';
import UpdateAvatar from '../../../components/User/UpdateProfileForm/UpdateAvatar';
import ChangePasswordForm from '../../../components/User/UpdateProfileForm/ChangePasswordForm';

const UpdateProfile = () => {

  const dispatch = useDispatch();

    useEffect(() => {
        initTabs();
    })

    useEffect(() => {
      const {userId} = JSON.parse(localStorage.decodePayload);
      dispatch(fetchUserProfile(+userId));
    }, [dispatch])
    
    const initTabs = () => {
        const el = document.getElementById('tabs-update-profile');
        M.Tabs.init(el, {});
      };

    return (
        <Layout>
            <div className="container">
        <div className="row card">
          <div className="col s12">
            <ul id="tabs-update-profile" className="tabs">
              <li className="tab col s3">
                <a className="active" href="#personal-info">
                  Thông tin cá nhân
                </a>
              </li>
              <li className="tab col s3">
                <a href="#avatar">Ảnh đại diện</a>
              </li>
              <li className="tab col s3">
                <a href="#change-password">Đổi mật khẩu</a>
              </li>
            </ul>
          </div>
          <div id="personal-info" className="col s10 offset-s1">
            <div className="section" style={{ paddingTop: 50 }}>
              <PersonalInfoForm />
            </div>
          </div>
          <div id="avatar" className="col s10 offset-s1">
            <div className="section" style={{ paddingTop: 50 }}>
              <UpdateAvatar />
            </div>
          </div>
          <div id="change-password" className="col s10 offset-s1">
          <div className="section" style={{ paddingTop: 50 }}>
            <ChangePasswordForm />
          </div>
          </div>
        </div>
      </div>
        </Layout>
    )
}

export default UpdateProfile
