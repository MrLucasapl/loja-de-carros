import React from "react";
import { Outlet } from "react-router-dom";
import { Icar } from "../../global";
import { getAllCar } from "../../services/api";
import Header from "../header";
import { PagesStyle } from "./style";

const Layout = () => {
  const [data, setData] = React.useState<Icar[]>([]);
  const [copyData, setCopyData] = React.useState<Icar[]>([]);

  React.useEffect(() => {
    getAllCar().then((response: Icar[]) => {
      setData(response);
      setCopyData(response);
    });
  }, []);

  return (
    <PagesStyle>
      <Header copyData={copyData} setCopyData={setCopyData} />
      <Outlet context={[data, copyData, setCopyData]} />
    </PagesStyle>
  );
};

export default Layout;
