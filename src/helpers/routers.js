import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { AuthRoutes, NonAuthRoutes } from "./url";
import LargeScreen from "../pages/LargeScreen";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{" "}
        <Route path={NonAuthRoutes.signin} element={<LoginButton />} />{" "}
        <Route path={NonAuthRoutes.logout} element={<LogoutButton />} />{" "}
        <Route path={AuthRoutes.largeScreen} element={<LargeScreen />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default routers;
