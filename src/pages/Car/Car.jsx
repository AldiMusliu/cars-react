import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/api/";
import React from "react";
import { useState } from "react";
import CostumModal from "../../components/CostumModal";
import BookNowModalContent from "../../components/BookNowModalContent/BookNowModalContent";
import BuyNowModalContent from "../../components/BuyNowModalContent/BuyNowModalContent";

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
  const [bookNowModalShow, setBookNowModalShow] = useState(false);
  const [buyNowModalShow, setBuyNowModalShow] = useState(false);
  const handleBookNowBtnClick=()=>{
    if(localStorage.getItem('token')){
      setBookNowModalShow(true)
    }
    else(
      navigate('/login')
    )
  }
  const handleBuyNowBtnClick=()=>{
    if(localStorage.getItem('token')){
      setBuyNowModalShow(true)
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
  {car?.available ? (
    <span style={{ color: 'green' }}>Yes</span>
  ) : (
    <span style={{ color: 'red' }}>No</span>
  )}
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
        modalBody={<BookNowModalContent setModalShow={setBookNowModalShow} />}
        show={bookNowModalShow}
        onHide={() => setBookNowModalShow(false)}
        
      />
      <CostumModal
        modalBody={<BuyNowModalContent setModalShow={setBuyNowModalShow} />}
        show={buyNowModalShow}
        onHide={() => setBuyNowModalShow(false)}
        
      />
    </div>
  );
};
export default Car;
