import AdminStudentContainer from "../../components/AdminStudent/AdminStudentContainer";
import Layout from "../../layout/Layout";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_ADMIN} from "../../redux/constants/common"

const AdminStudent = () => {
  return (
    <Layout>
      <AdminStudentContainer />
    </Layout>
  )
}

export default WithAuthenticate(AdminStudent,[ROLE_ADMIN]);