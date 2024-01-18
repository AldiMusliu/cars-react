import React, { useState } from "react";
import { Icons } from "./Icons/Icons";
import { useNavigate } from "react-router-dom";
import CostumModal from "./CostumModal";
import DeleteItemModalContent from "./DeleteItemModalContent/DeleteItemModalContent";
import { api } from "../lib/api/";

const TabelUserListItem = ({
  user: { firstName, email, _id: userId },
  setRerender,
}) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const deleteUser = async () => {
    const result = await api.call({
      url: `/users/${userId}`,
      method: "DELETE",
    });
    if (result.success) {
      setModalShow(false);
      setRerender((prev) => !prev);
    }
  };
  const deleteUserFun = () => {
    deleteUser();
  };
  return (
    <>
      <tr>
        <td className="firstItem">{firstName}</td>
        <td>{email}</td>
        <td className="lastItem">
          <span className="icon" onClick={() => navigate(`${userId}`)}>
            {<Icons.Edit />}
          </span>
          <span className="icon" onClick={() => setModalShow(true)}>
            {<Icons.Delete />}
          </span>
        </td>
      </tr>
      <CostumModal
        modalBody={
          <DeleteItemModalContent
            setModalShow={setModalShow}
            deleteFunction={deleteUserFun}
          />
        }
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default TabelUserListItem;
