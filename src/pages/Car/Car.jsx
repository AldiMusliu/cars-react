import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/api/";
import React from "react";
import { useState } from "react";
import CostumModal from "../../components/CostumModal";
import BookNowModalContent from "../../components/BookNowModalContent/BookNowModalContent";

const Car = () => {
  const navigate=useNavigate()
  const { carId } = useParams();
  const [car, setCar] = React.useState();
  const getCar = async () => {
    const result = await api.call({ url: `/car/${carId}`, Method: "GET" });
    if (result.success) {
      setCar(result.data);
    }
  };
  const [modalShow, setModalShow] = useState(false);
  const handleBookNowBtnClick=()=>{
    if(localStorage.getItem('token')){
      setModalShow(true)
    }
    else(
      navigate('/login')
    )
  }
  const handleBuyNowBtnClick=()=>{
    if(localStorage.getItem('token')){

    }
    else(
      navigate('/login')
    )
  }
  React.useEffect(() => {
    getCar();
  }, []);
  return (
    <div className="car container">
      <h4 className="car-title">{car?.name}</h4>
      <div className="car-content">
        <div className="car-content-details">
          <h5>{car?.description}</h5>
          <p>
            <span>Model: </span>
            {car?.model}
          </p>
          <p>
            <span>Price For Rent: </span>
            {car?.priceRent}
          </p>
          <p>
            <span>Price For Sell: </span>
            {car?.priceSell}
          </p>
          <p>
            <span>Is Available: </span>
            {car?.available}
          </p>

          <p>
            <span>Seats: </span>
            {car?.seats}
          </p>
        </div>
        <img src={car?.images} alt="" className="car-content-photo" />
      </div>
      <div className="car-buttons">
        <button onClick={handleBookNowBtnClick}>Book Now</button>
        <button onClick={handleBuyNowBtnClick}>Buy Now</button>
      </div>
      <CostumModal
        modalBody={<BookNowModalContent setModalShow={setModalShow} />}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default Car;
