import React from "react";
import CardCar from "../../components/cardCar/inde";
import { Icar } from "../../global";
import { getAllCar } from "../../services/api";
import { filterCar } from "../../util/filterCar";
import { HomeStyled } from "./style";

type TInputField = {
  name: string;
  value: string;
};

const inputField: TInputField[] = [
  {
    name: "search",
    value: "",
  },
  {
    name: "filter",
    value: "",
  },
];

const Home = () => {
  const [data, setData] = React.useState<Icar[]>([]);
  const [copyData, setCopyData] = React.useState<Icar[]>([]);
  const [formSave, setformSave] = React.useState(
    inputField.reduce(
      (acc, field) => {
        return { ...acc, [field.name]: "" };
      },
      { search: "", filter: "" }
    )
  );

  React.useEffect(() => {
    getAllCar().then((response: Icar[]) => {
      setData(response);
      setCopyData(response);
    });
  }, []);

  React.useEffect(() => {
    filterCar(formSave.search, formSave.filter, data, setCopyData);
  }, [formSave]);

  const handleChange = ({ target }: any) => {
    setformSave({ ...formSave, [target.name]: target.value });
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <HomeStyled>
      <div className="box-input">
        <form action="">
          <input
            type="text"
            name="search"
            onInput={handleChange}
            autoComplete="off"
          />
          <select name="filter" id="filter" onInput={handleChange}>
            <option value="">Selecione</option>
            <option value="marca">Marca</option>
            <option value="modelo">Modelo</option>
          </select>
        </form>
      </div>
      <div className="box-cards">
        <CardCar values={copyData} />
      </div>
    </HomeStyled>
  );
};

export default Home;
