import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import { PagesStyle } from "./style";

const Layout = () => {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const closeMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <PagesStyle>
      <Header closeMenu={closeMenu} />
      <Outlet context={[isActive]} />
    </PagesStyle>
  );
};

export default Layout;
