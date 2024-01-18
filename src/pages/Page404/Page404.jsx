import React from "react";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div className="page404">
      <h1 className="page404-title">4<span>0</span>4</h1>
      <p className="page404-subtitle">
        Page <strong><span>not found!</span> </strong>
       Looks like you got lost.
      </p>
      <NavLink to="/" className="page404-link">
        GO HOME
      </NavLink>
    </div>
  );
}
export default Page404;
