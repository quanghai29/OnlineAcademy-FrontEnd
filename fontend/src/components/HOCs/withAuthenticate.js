import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

//WrappedComponent: the component is wrapped
//roleArr: the array contains roles
const WithAuthenticate = (WrappedComponent, roleArr) => {
  const AuthenticatedRoute = (props) => {
  const accessToken = localStorage.getItem('accessToken');
  const payload = localStorage.getItem('decodePayload');
  const history = useHistory();
  let role = null;
  const [loading, setLoading] = useState(true);

  if(payload){
    role = JSON.parse(payload).role;
  }

    useEffect(() => {
      if (accessToken && roleArr.includes(role, 0)) {
        setLoading(false);
      } else {
        history.push('/login');
      }
    }, [accessToken,history, role])

    return (
      loading ? <div>Loading...</div> : <WrappedComponent {...props} />
    )
  }
  return AuthenticatedRoute;
};

export default WithAuthenticate;