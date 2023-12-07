import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../FireBase/AuthContexts";

const PrivateRoute = ({ children, role }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to={"/signIn"} />;
};
export default PrivateRoute;
