import Form from "react-bootstrap/Form";
import TabelUserListItem from "../../components/TabelUserListItem";
import React, { useState } from "react";
import { api, endpoints } from "../../lib/api/";

const DashboardUsers = () => {
  const [rerender, setRerender] = useState(false);
  const [users, setUsers] = React.useState();
  const getUsers = async () => {
    const result = await api.call(endpoints.getUsers);
    if (result.success) {
      setUsers(result.data);
    }
  };
  React.useEffect(() => {
    getUsers();
  }, [rerender]);
  return (
    <div className="dashboardUsers">
      <div className="filter">
        <h3>Users</h3>
      </div>
      <div className="tableContent">
        <table>
          <tr>
            <th className="firstItem">Full Name</th>
            <th>Email</th>
            <th className="lastItem">Actions</th>
          </tr>
          {users?.map((user) => {
            return (
              <TabelUserListItem
                key={user._id}
                user={user}
                setRerender={setRerender}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};
export default DashboardUsers;
