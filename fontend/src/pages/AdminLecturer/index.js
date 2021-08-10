import AdminLecturerContainer from "../../components/AdminLecturer/AdminLecturerContainer";
import Layout from "../../layout/Layout";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";

const AdminLecturer = () => {
  return (
    <Layout>
      <AdminLecturerContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminLecturer,[1]);