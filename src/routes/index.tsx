import { BrowserRouter, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { LoadingProvider } from "../context";
import Home from "../pages/home";

const Dors = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default Dors;
