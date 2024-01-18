import { useParams } from "react-router-dom";
import React from "react";
import { api} from "../../lib/api/";

const DashboardUser = () => {
  const {userId}=useParams();
  const [user, setUser] = React.useState();
  const getUser = async () => {
    const result = await api.call({url:`/users/${userId}`, Method:'GET'});
     if(result.success){
      setUser(result.data);
     }
  };
  React.useEffect(() => {
    getUser();
  }, []);
  console.log(user?.firstName)
  return (
    <div >
      <h4>{user?.firstName}</h4>
    </div>
  );
};
export default DashboardUser;