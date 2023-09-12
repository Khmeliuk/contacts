import { Suspense } from "react";
import AppBar from "./Component/AppBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
