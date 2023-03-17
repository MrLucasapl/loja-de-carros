import React from "react";
import CardCar from "../../components/cardCar";
import Fildform from "../../components/form";
import Header from "../../components/header";
import { Loading } from "../../components/loading";
import { useLoading } from "../../context";
import { Icar } from "../../global";
import { getAllCar } from "../../services/api";
import { getOptions } from "../../util/getOptionElementsWithCount";
import { HomeStyled } from "./style";

const Home = () => {
  const [data, setData] = React.useState<Icar[]>([]);
  const [copyData, setCopyData] = React.useState<Icar[]>([]);
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
  
  const { isLoading, setLoading } = useLoading();

  React.useEffect(() => {
    setLoading(true);
    getAllCar().then((response: Icar[]) => {
      setData(response);
      setCopyData(response);
      setLoading(false);
    });
  }, [setLoading]);

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

  return (
    <HomeStyled>
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
