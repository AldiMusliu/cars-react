import CardCarListItem from "../../components/CardCarListItem";
import React from "react";
import { api, endpoints } from "../../lib/api/";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashboardCars = () => {
  const navigate = useNavigate();
  const [rerender, setRerender] = React.useState(false);
  const [cars, setCars] = React.useState();
  const getCars = async () => {
    const result = await api.call(endpoints.getCars);
    if (result.success) {
      setCars(result.data);
    }
  };
  React.useEffect(() => {
    getCars();
  }, [rerender]);
  return (
    <div className="dashboardCars">
      <div className="filter">
        <h3>Cars</h3>
        <Button onClick={() => navigate("add")}>Add New Car</Button>
      </div>
      <div className="dashboardCars-grid">
        {cars?.map((car) => {
          return (
            <div className="carCard" key={car._id}>
              <img src={car.images} alt="porsche" />
              <div className="carCard-content">
                <p className="info">
                  <span>Name: </span>
                  {car?.name}
                </p>
                <p className="info">
                  <span>Model: </span>
                  {car?.model}
                </p>
                <p className="info">
                  <span>Price For Rent: </span>
                  {car?.priceRent}
                </p>
                <p className="info">
                  <span>Seats: </span>
                  {car?.seats}
                </p>
                <p className="info">
                  <span>Description: </span>
                  {car?.description}
                </p>
                {car?.available && <p className="available">Available</p>}
                {!car?.available && (
                  <p
                    className="available"
                    style={car?.available ? {} : { backgroundColor: "red" }}
                  >
                    Not Available
                  </p>
                )}
                <CardCarListItem id={car._id} setRerender={setRerender} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashboardCars;
