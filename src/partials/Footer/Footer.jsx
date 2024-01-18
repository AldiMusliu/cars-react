import * as React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-part1">
          <NavLink to="./" className="headerIcon">
            ADEX
          </NavLink>
          <div className="links">
            <NavLink to="/cars">Cars</NavLink>
            <NavLink to="/faq">FAQs</NavLink>
          </div>
        </div>
        <p className="footer-part2">
          &#169;{`Copyright ${year}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
