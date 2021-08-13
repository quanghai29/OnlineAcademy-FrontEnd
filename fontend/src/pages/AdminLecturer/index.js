import AdminLecturerContainer from "../../components/AdminLecturer/AdminLecturerContainer";
import Layout from "../../layout/Layout";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_ADMIN} from "../../redux/constants/common"

const AdminLecturer = () => {
  return (
    <Layout>
      <AdminLecturerContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminLecturer,[ROLE_ADMIN]);