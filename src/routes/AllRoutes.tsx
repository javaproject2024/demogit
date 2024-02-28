import Footer from "@/components/views/Footer/Footer";
import HomePage from "@/components/views/HomePage/HomePage";
import Login from "@/components/views/Login/Login";
import NavBar from "@/components/views/Navigation/Navbar";
import * as PATH from "@/configs/routeConfig.tsx";

import {
  Route,
  Routes,
} from "react-router-dom";

function AllRoutes() {
  return (
    <>
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
    </>
  );
}

export default AllRoutes;
