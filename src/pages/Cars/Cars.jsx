import * as React from "react";
import CarCard from "../../components/CarCard/CarCard";
import Form from "react-bootstrap/Form";
import { api, endpoints } from "../../lib/api/";

const Cars = () => {
  const [cars, setCars] = React.useState();
  const getCars = async () => {
    const result = await api.call(endpoints.getCars);
    if (result.success) {
      setCars(result.data);
    }
  };
  React.useEffect(() => {
    getCars();
  }, []);
  return (
    <div className="cars container">
      <div className="filter">
        <h3>List of cars</h3>
      </div>
      <div className="cars-content">
        {cars?.map((car) => {
          return <CarCard car={car} key={car._id}/>;
        })}
      </div>
    </div>
  );
};
export default Cars;
