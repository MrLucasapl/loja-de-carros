import React from "react";
import CardCar from "../../components/cardCar";
import Fildform from "../../components/form";
import { Loading } from "../../components/loading";
import { useLoading } from "../../context";
import { Icar, OutletContextType } from "../../global";
import { getOptions } from "../../util/getOptionElementsWithCount";
import { HomeStyled } from "./style";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [data, copyData, setCopyData]: OutletContextType = useOutletContext();
  const { isLoading, setLoading } = useLoading();

  const [brands, setBrands] = React.useState<JSX.Element[]>([]);
  const [years, setYears] = React.useState<JSX.Element[]>([]);
  const [fuel, setFuel] = React.useState<JSX.Element[]>([]);
  const [category, setCategory] = React.useState<string[]>([
    "Ano",
    "Preço",
    "Marca",
    "Modelo",
    "Quilometragem",
  ]);

  React.useEffect(() => {
    setFuel(getOptions(data, "combustivel"));
    setBrands(getOptions(data, "marca"));
  }, [data]);

  React.useEffect(() => {
    const startYear = 1900;
    const currentYear = new Date().getFullYear();

    const years = [];
    for (let i = startYear; i <= currentYear; i++) {
      years.push(i);
    }

    const yearsOptions: JSX.Element[] = [];
    for (const year in years) {
      yearsOptions.push(
        <option key={years[year]} value={years[year]}>
          {years[year]}
        </option>
      );
    }
    setYears(yearsOptions);
  }, [data]);

  function renderContent(isLoading, copyData) {
    if (isLoading) {
      return <Loading isLoading={isLoading} />;
    } else if (copyData.length > 0) {
      return (
        <div className="box-cards">
          <CardCar values={copyData} />
        </div>
      );
    } else {
      return <strong className="erro">Nenhum Carro Encontrado!</strong>;
    }
  }

  return (
    <HomeStyled>
      {
        <div className="box-forms">
          <Fildform
            copyData={copyData}
            brands={brands}
            years={years}
            fuel={fuel}
            data={data}
            setCopyData={setCopyData}
          />
        </div>
      }
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <div className="box-cards">
          {copyData.length > 0 ? (
            <CardCar values={copyData} />
          ) : (
            <strong className="erro">Nenhum Carro Encontrado!</strong>
          )}
        </div>
      )}
    </HomeStyled>
  );
};

export default Home;
