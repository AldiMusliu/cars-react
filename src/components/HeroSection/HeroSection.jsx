import * as React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroSection">
      <div className="heroDescription container">
        <h1 className="heroDescription-title">
          Your One-Stop Destination for Car Rentals & Shopping
        </h1>
        <p className="heroDescription-paragaph">
          Whether you're looking for a reliable vehicle for a business trip, a
          spacious SUV for a family vacation, or a luxury car for a special
          occasion, we have the perfect vehicle for you.
        </p>
        <NavLink to="/cars">
            <button>
          Shop or Rent Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
