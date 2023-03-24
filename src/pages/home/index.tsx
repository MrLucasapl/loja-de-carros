import React from "react";
import Fildform from "../../components/form";
import { Icar, OutletContextType } from "../../global";
import { getOptions } from "../../util/getOptionElementsWithCount";
import { HomeStyled } from "./style";
import RenderContext from "../../components/renderContent";
import { useOutletContext } from "react-router-dom";

const Home = ({ copyData, data, setCopyData }: OutletContextType) => {
  const [brands, setBrands] = React.useState<JSX.Element[]>([]);
  const [yearMin, setYearMin] = React.useState<JSX.Element[]>([]);
  const [yearMax, setYearMax] = React.useState<JSX.Element[]>([]);
  const [fuel, setFuel] = React.useState<JSX.Element[]>([]);
  const [selectedCars, setSelectedCars] = React.useState<Icar[]>([]);

  const [isActive] = useOutletContext<any>();

  React.useEffect(() => {
    setFuel(getOptions(data, "combustivel"));
    setBrands(getOptions(data, "marca"));
  }, [data]);

  React.useEffect(() => {
    if (data.length) {
      const startYear = data.reduce((acc, field) =>
        acc.ano < field.ano ? acc : field
      );
      const currentYear = new Date().getFullYear();

      const years = [];
      for (let i = startYear.ano; i <= currentYear; i++) {
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
      setYearMin(yearsOptions);
      setYearMax(yearsOptions);
    }
  }, [data]);

  return (
    <HomeStyled>
      {
        <div className="box-forms">
          <Fildform
            display={isActive}
            data={data}
            fuel={fuel}
            yearMin={yearMin}
            yearMax={yearMax}
            brands={brands}
            copyData={copyData}
            setCopyData={setCopyData}
            setYearMax={setYearMax}
            selectedCars={selectedCars}
          />
        </div>
      }
      <RenderContext
        setSelectedCars={setSelectedCars}
        selectedCars={selectedCars}
        copyData={copyData}
      />
    </HomeStyled>
  );
};

export default Home;
