import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Icar } from "../global";
import Home from "../pages/home";
import { getAllCar } from "../services/api";

const Dors = () => {
  const [data, setData] = React.useState<Icar[]>([]);
  const [copyData, setCopyData] = React.useState<Icar[]>([]);

  React.useEffect(() => {
    getAllCar().then((response: Icar[]) => {
      setData(response);
      setCopyData(response);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home copyData={copyData} data={data} setCopyData={setCopyData} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Dors;
