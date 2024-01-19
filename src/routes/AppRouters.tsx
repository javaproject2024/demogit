// import React, { lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import * as PATH from "@/configs/routeConfig.tsx";
import Login from "@/components/views/Login/Login";
import HomePage from "@/components/views/HomePage/HomePage";
import NavBar from "@/components/views/Navigation/Navbar";
import Footer from "@/components/views/Footer/Footer";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={PATH.HOME_PATH}
            element={<HomePage />}
          />

          <Route
            path={PATH.LOGIN_PATH}
            element={<Login />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default AppRouter;
