/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogin = useSelector((state) => state.auth.isLoading);

  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
