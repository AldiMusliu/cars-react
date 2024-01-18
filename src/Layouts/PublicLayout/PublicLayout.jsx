import { Outlet } from "react-router-dom";
import Footer from "../../partials/Footer/Footer";
import Header from "../../partials/Header/Header";

const PublicLayout = () => {
  return (
    <div className="publicLayout">
      <Header />
      <div className="publicLayout-outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
