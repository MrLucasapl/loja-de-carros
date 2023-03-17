import React from "react";
import { Icar, IhandleChange, TFormData } from "../../global";
import { filterCar } from "../../util/filterCar";
import { FildformStyled } from "./style";

const inputField: TFormData[] = [
  {
    search: "",
    filter: "",
    yearMin: "",
    yearMax: "",
    priceMin: "",
    priceMax: "",
    kmMin: "",
    kmMax: "",
    fuel: "",
    newCar: false,
    usedCar: false,
  },
];

interface IFildform {
  brands: JSX.Element[];
  years: JSX.Element[];
  fuel: JSX.Element[];
  copyData: Icar[];
  data: Icar[];
  setCopyData: React.Dispatch<React.SetStateAction<Icar[]>>;
}

const Fildform = ({
  brands,
  years,
  fuel,
  data,
  copyData,
  setCopyData,
}: IFildform) => {
  const [isActiveNewCar, setIsActiveNewCar] = React.useState<boolean>(false);
  const [isActiveUsedCar, setIsActiveUsedCar] = React.useState<boolean>(false);
  const [formSave, setformSave] = React.useState(
    inputField.reduce(
      (acc, field) => {
        return { ...acc, ...field };
      },
      {
        search: "",
        filter: "",
        yearMin: "",
        yearMax: "",
        priceMin: "",
        priceMax: "",
        kmMin: "",
        kmMax: "",
        fuel: "",
        newCar: false,
        usedCar: false,
      }
    )
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    filterCar(formSave, data, setCopyData);
  };

  const handleChange = ({ name, value }: IhandleChange) => {
    setformSave({ ...formSave, [name]: value });
  };

  return (
    <FildformStyled>
      <form onSubmit={handleSubmit}>
        <div className="search-total">{copyData.length}</div>
        <label htmlFor="search" className="box-input-search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Busque aqui..."
            onChange={({ target }) =>
              handleChange({ name: target.name, value: target.value })
            }
            autoComplete="off"
          />
        </label>

        <select
          name="filter"
          id="filter"
          onChange={({ target }) =>
            handleChange({ name: target.name, value: target.value })
          }
        >
          <option value="">Selecione</option>
          {brands}
        </select>

        <div className="box-year-select">
          <select
            name="yearMin"
            id="yearMin"
            onChange={({ target }) =>
              handleChange({ name: target.name, value: target.value })
            }
          >
            <option value="">Ano Min</option>
            {years}
          </select>

          <select
            name="yearMax"
            id="yearMax"
            onChange={({ target }) =>
              handleChange({ name: target.name, value: target.value })
            }
          >
            <option value="">Ano Max</option>
            {years}
          </select>
        </div>

        <div className="box-price">
          <label htmlFor="priceMin" className="box-input-priceMin">
            <input
              type="text"
              name="priceMin"
              id="priceMin"
              placeholder="Valor Min."
              onChange={({ target }) =>
                handleChange({ name: target.name, value: target.value })
              }
              autoComplete="off"
            />
          </label>
          <label htmlFor="priceMax" className="box-input-priceMax">
            <input
              type="text"
              name="priceMax"
              id="priceMax"
              placeholder="Valor Max."
              onChange={({ target }) =>
                handleChange({ name: target.name, value: target.value })
              }
              autoComplete="off"
            />
          </label>
        </div>

        <div className="box-km">
          <label htmlFor="kmMin" className="box-input-kmMin">
            <input
              type="text"
              name="kmMin"
              id="kmMin"
              placeholder="Km Min."
              onChange={({ target }) =>
                handleChange({ name: target.name, value: target.value })
              }
              autoComplete="off"
            />
          </label>
          <label htmlFor="kmMax" className="box-input-kmMax">
            <input
              type="text"
              name="kmMax"
              id="kmMax"
              placeholder="Km Max."
              onChange={({ target }) =>
                handleChange({ name: target.name, value: target.value })
              }
              autoComplete="off"
            />
          </label>
        </div>

        <select
          name="fuel"
          id="fuel"
          onChange={({ target }) =>
            handleChange({ name: target.name, value: target.value })
          }
        >
          <option value="">Combustivel</option>
          {fuel}
        </select>

        <div className="box-checkbox">
          <label htmlFor="newCar" className="box-input-newCar">
            <input
              type="checkbox"
              name="newCar"
              id="newCar"
              checked={isActiveNewCar}
              onChange={({ target }) => {
                handleChange({ name: "newCar", value: target.checked });
                setIsActiveNewCar(!isActiveNewCar);
              }}
            />
            Novo
          </label>

          <label htmlFor="usedCar" className="box-input-usedCar">
            <input
              type="checkbox"
              name="usedCar"
              id="usedCar"
              checked={isActiveUsedCar}
              onChange={({ target }) => {
                handleChange({ name: "usedCar", value: target.checked });
                setIsActiveUsedCar(!isActiveUsedCar);
              }}
            />
            Usado
          </label>
        </div>

        <button type="submit">Buscar</button>
      </form>
    </FildformStyled>
  );
};

export default Fildform;
