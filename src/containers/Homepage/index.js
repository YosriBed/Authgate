import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Welcome from "./Welcome";

const Homepage = () => {
  const user = useSelector((state) => state.user);

  return user ? <Welcome /> : <Navigate replace to='/auth' />;
};

export default Homepage;
