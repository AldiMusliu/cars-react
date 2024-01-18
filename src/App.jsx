import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import Page404 from "./pages/Page404/Page404";
import DashboardHome from "./pages/DashboardHome/DashboardHome";
import DashboardCars from "./pages/DashboardCars/DashboardCars";
import DashboardCar from "./pages/DashboardCar/DashboardCar";
import DashboardUsers from "./pages/DashboardUsers/DashboardUsers";
import DashboardUser from "./pages/DashboardUser/DashboardUser";
import Cars from "./pages/Cars/Cars";
import Car from "./pages/Car/Car";
import FAQ from "./pages/FAQ/FAQ";
import PublicLayout from "./Layouts/PublicLayout/PublicLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import VerifyAccount from "./pages/VerifyAccount/VerifyAccount";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { useEffect } from "react";
import AddDashboardCar from "./pages/AddDashboardCar/AddDashboardCar";

function App() {
  useEffect(()=>{

  },[localStorage.getItem('token')])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {!localStorage.getItem("token") && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="verify" element={<VerifyAccount />} />
            </>
          )}
          <Route path="" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="cars" element={<Cars />} />
            <Route path="cars/:carId" element={<Car />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
          {(localStorage.getItem("token")&&localStorage.getItem('role')==='ADMIN' )&& (
            <Route path="dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="cars" element={<DashboardCars />} />
              <Route path="cars/:carId" element={<DashboardCar />} />
              <Route path="cars/add" element={<AddDashboardCar />} />
              <Route path="users" element={<DashboardUsers />} />
              <Route path="users/:userId" element={<DashboardUser />} />
            </Route>
          )}
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
