import AdminStudentContainer from "../../components/AdminStudent/AdminStudentContainer";
import Layout from "../../layout/Layout";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";

const AdminStudent = () => {
  return (
    <Layout>
      <AdminStudentContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminStudent,[1]);