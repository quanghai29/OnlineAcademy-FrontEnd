import Layout from "../../layout/Layout";
import AdminCourseContainer from "../../components/AdminCourse/AdminCourseContainer";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_ADMIN} from "../../redux/constants/common"

const AdminCourse = () => {
  return (
    <Layout>
      <AdminCourseContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminCourse, [ROLE_ADMIN]);