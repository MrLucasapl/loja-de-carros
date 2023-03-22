import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LoadingProvider, useLoading } from "../context";
import { Icar } from "../global";
import Home from "../pages/home";
import { getAllCar } from "../services/api";

const Dors = () => {
  const [data, setData] = React.useState<Icar[]>([]);
  const [copyData, setCopyData] = React.useState<Icar[]>([]);

  const { setLoading } = useLoading();

  React.useEffect(() => {
    setLoading(true);
    getAllCar().then((response: Icar[]) => {
      setData(response);
      setCopyData(response);
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      <LoadingProvider>
        <Route
          path="/"
          element={
            <Home copyData={copyData} data={data} setCopyData={setCopyData} />
          }
        />
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default Dors;
