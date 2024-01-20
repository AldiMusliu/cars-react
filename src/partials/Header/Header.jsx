import * as React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [token, setToken] = React.useState();
  const [userRole, setUserRole] = React.useState();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
  };

  React.useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserRole(localStorage.getItem("role")); // Fetch and set the user's role
  }, [token]);

  return (
    <header>
      <div className="headerContent container">
        <div className="headerLinks">
          <NavLink to="./" className="headerIcon">
            Chill Wheels
          </NavLink>
          <div className="link">
            <NavLink to="/cars">Cars</NavLink>
            <NavLink to="/faq">FAQs</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>

            {/* Conditionally render the Dashboard NavLink based on user role */}
            {userRole === 'ADMIN' && (
              <NavLink to="/dashboard">Dashboard</NavLink>
            )}
          </div>
        </div>
        {token ? (
          <div>
            <button onClick={handleLogout} className="headerContent-register">
              Logout
            </button>
          </div>
        ) : (
          <div className="loginRegister">
            <NavLink to="/login" className="headerContent-login">
              Login
            </NavLink>
            <NavLink to="/register" className="headerContent-register">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
