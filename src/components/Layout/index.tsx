import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import { PagesStyle } from "./style";

const Layout = () => {
  return (
    <PagesStyle>
      <Header />
      <Outlet />
    </PagesStyle>
  );
};

export default Layout;
