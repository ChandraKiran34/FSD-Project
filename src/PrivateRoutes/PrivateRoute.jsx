import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../FireBase/AuthContexts";

const PrivateRoute = ({ children, roles }) => {
  const { role } = useAuth();

  const getLink = (roleId) => {
    if (roleId === "user") {
      return "/signIn";
    } else if (roleId === "guide") {
      return "/guideSignIn";
    } else if (roleId === "hotel") {
      return "/hotelSignIn";
    } else if (roleId === 'agency') {
      return "/agencySignIn";
    }
  };

  if (role === roles) {
    return children;
  } else {
    return <Navigate to={getLink(roles)} />;
  }
};

export default PrivateRoute;
