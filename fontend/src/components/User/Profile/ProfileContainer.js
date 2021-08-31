import { useEffect, useState } from "react";
import * as userApi from "../../../api/user";
import { DOMAIN_API } from "../../../redux/constants/common"
import { Link } from "react-router-dom";
import styles from "./Profile.module.scss"


const ProfileContainer = ({ userId }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function getUserProfile(id) {
      const data = await userApi.getProfile.getDetailInfoUser(id);
      setUserInfo(data);
    }
    getUserProfile(userId);
  }, [userId])

  return (
    <div className="row">
      <div className="col s4 offset-s4" style={{ clear: "both", padding: "50px 0" }}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator"
              src={`${DOMAIN_API}/common/media/image/${userInfo.img_source}`} alt="avatar"
              onError={
                (e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/images/account/avatar.png"
                }} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">Hiển thị thông tin
              <i className="material-icons right">more_vert</i></span>
            <p><Link to='/'>Quay lại trang chủ</Link></p>
          </div>
          <div className="card-reveal">
            <div className={styles['user-info-container']}>
              <div>
                <span className="card-title grey-text text-darken-4">Thông tin
                  <i className="material-icons right">close</i>
                </span>
              </div>
              <div>
                <span className={styles['title']}>Họ tên: </span>
                <span>{userInfo.fullname || 'Không biết'}</span>
              </div>
              <div>
                <span className={styles['title']}>Về bản thân: </span>
                <span>{userInfo.headline || ''}</span>
              </div>
              <div>
                <span className={styles['title']}>Email: </span>
                <span>{userInfo.email || 'Không biết'}</span>
              </div>
              <div style={{ marginTop: '20px' }}>
                <span className={styles['title']}>
                  Mô tả ngắn
                </span>
                <p className={styles['description']} 
                dangerouslySetInnerHTML={{ __html: userInfo.description || '' }}>
                {/*{userInfo.description || ''} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;