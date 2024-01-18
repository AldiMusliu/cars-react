import React, { useState } from "react";
import { Icons } from "./Icons/Icons";
import { useNavigate } from "react-router-dom";
import CostumModal from "./CostumModal";
import DeleteItemModalContent from "./DeleteItemModalContent/DeleteItemModalContent";
import { api } from "../lib/api/";

const TabelCarListItem = ({ id: carId, setRerender }) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const deleteCar = async () => {
    const result=await api.call({ url: `/car/${carId}`, method: "DELETE" });
    if(result.success){
      setModalShow(false);
      setRerender(prev=>!prev)
    }
  };
  const deleteCarFun = () => {
    deleteCar();
  };
  return (
    <>
      <div className="editDelete">
        <span className="icon" onClick={() => navigate(`${carId}`)}>
          {<Icons.Edit />}
        </span>
        <span className="icon" onClick={() => setModalShow(true)}>
          {<Icons.Delete />}
        </span>
      </div>
      <CostumModal
        modalBody={
          <DeleteItemModalContent
            setModalShow={setModalShow}
            deleteFunction={deleteCarFun}
          />
        }
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
export default TabelCarListItem;
