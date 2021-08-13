import Layout from "../../layout/Layout";
import ProfileContainer from "../../components/User/Profile/ProfileContainer";
import { useLocation } from "react-router";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_ADMIN} from "../../redux/constants/common"

const Profile = () => {
  const locationState = useLocation().state;
  const userId = locationState.user_id;
  return (
    <Layout>
      <ProfileContainer userId={userId}/>
    </Layout>
  )
}

export default WithAuthenticate(Profile, [ROLE_ADMIN]);