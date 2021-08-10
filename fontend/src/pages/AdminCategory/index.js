import AdminCategoryContainer from "../../components/AdminCategory/AdminCategoryContainer";
import Layout from "../../layout/Layout";
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_ADMIN} from "../../redux/constants/common"
 
const AdminCategory = ()=>{
  return(
    <Layout>
      <AdminCategoryContainer/>
    </Layout>
  )
}

export default WithAuthenticate(AdminCategory, [ROLE_ADMIN]);