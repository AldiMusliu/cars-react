import * as React from "react";
import { useNavigate } from "react-router-dom";


const CarCard = ({car}) => {
  const navigate = useNavigate();
  return (
    <div className="carCard" key={car._id} onClick={()=>navigate(`${car._id}`)}>
    <img src={car.images} alt="porsche" />
    <div className="carCard-content">
      <p className="info"><span>Name: </span>{car?.name}</p>
      <p className="info"><span>Model: </span>{car?.model}</p>
      <p className="info"><span>Price For Rent: </span>{car?.priceRent}</p>
      <p className="info"><span>Seats: </span>{car?.seats}</p>
      {car?.available&&<p className="available">Available</p>}
      {!car?.available&&<p className="available" style={car?.available?{}:{backgroundColor:'red'}}>Not Available</p>}
    </div>
  </div>
  );
};

export default CarCard;
