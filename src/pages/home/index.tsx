import React from "react";
import Fildform from "../../components/form";
import { useLoading } from "../../context";
import { Icar, OutletContextType } from "../../global";
import { getOptions } from "../../util/getOptionElementsWithCount";
import { HomeStyled } from "./style";
import RenderContext from "../../components/renderContent";

const Home = ({ copyData, data, setCopyData }: OutletContextType) => {
  const { isLoading, setLoading } = useLoading();

  const [brands, setBrands] = React.useState<JSX.Element[]>([]);
  const [years, setYears] = React.useState<JSX.Element[]>([]);
  const [fuel, setFuel] = React.useState<JSX.Element[]>([]);
  const [contSelected, setContSelected] = React.useState<number>(0);
  const [selectedCars, setSelectedCars] = React.useState<Icar[]>([]);
  const [showMenu, setShowMenu] = React.useState(false);

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  React.useEffect(() => {
    setLoading(true);
    setFuel(getOptions(data, "combustivel"));
    setBrands(getOptions(data, "marca"));
    setLoading(false);
  }, [data]);

  React.useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, [data]);

  return (
    <HomeStyled>
      {
        <div className="box-forms">
          <Fildform
            data={data}
            fuel={fuel}
            years={years}
            brands={brands}
            copyData={copyData}
            setCopyData={setCopyData}
            contSelected={contSelected}
            selectedCars={selectedCars}
          />
        </div>
      }
      <RenderContext setSelectedCars={setSelectedCars} isLoading={isLoading} copyData={copyData} setContSelected={setContSelected} />
    </HomeStyled>
  );
};

export default Home;
