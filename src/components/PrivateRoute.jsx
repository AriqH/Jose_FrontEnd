import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
