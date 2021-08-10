import Layout from "../../layout/Layout";
import AdminCourseContainer from "../../components/AdminCourse/AdminCourseContainer";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";

const AdminCourse = () => {
  return (
    <Layout>
      <AdminCourseContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminCourse, [1]);