import React from "react";
import { IFildform, IhandleChange, TFormData } from "../../global";
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
    orderBy: "",
    asc: false,
    newCar: false,
    usedCar: false,
  },
];

const Fildform = ({
  brands,
  yearMax,
  yearMin,
  fuel,
  data,
  copyData,
  selectedCars,
  setCopyData,
  setYearMax,
  contSelected,
}: IFildform) => {
  const [isActiveNewCar, setIsActiveNewCar] = React.useState<boolean>(false);
  const [isActiveUsedCar, setIsActiveUsedCar] = React.useState<boolean>(false);
  const [isActiveAsc, setIsActiveAsc] = React.useState<boolean>(false);
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
        orderBy: "",
        asc: false,
        newCar: false,
        usedCar: false,
      }
    )
  );

  React.useEffect(() => {
    const currentYear = new Date().getFullYear();

    const years = [];
    for (let i = Number(formSave.yearMin); i <= currentYear; i++) {
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
    setYearMax(yearsOptions);
  }, [formSave.yearMin]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    filterCar(formSave, data, setCopyData);
  };

  const handleChange = ({ name, value }: IhandleChange) => {
    setformSave({ ...formSave, [name]: value });
  };

  const calculateAverage = () => {
    let vari = 0;
    copyData.map((car) => {
      vari += car.preco;
    });
    vari = vari / copyData.length;
    alert(
      `A media dos valores dos carros em tela é: ${vari.toLocaleString(
        "pt-br",
        {
          style: "currency",
          currency: "BRL",
        }
      )}`
    );
  };

  const calculateMoreYears = () => {
    const countByYear: { [key: number]: number } = {};

    copyData.forEach((car) => {
      if (countByYear[car.ano]) {
        countByYear[car.ano]++;
      } else {
        countByYear[car.ano] = 1;
      }
    });

    const mostFrequentYear = Object.keys(countByYear).reduce((acc, val) => {
      return countByYear[Number(acc)] > countByYear[Number(val)] ? acc : val;
    });

    alert(`O ano com mais carros é ${mostFrequentYear}`);
  };

  const calculateAverageYears = () => {
    const idCounts: { [key: string]: number } = {};
    selectedCars.forEach((car) => {
      idCounts[car.id] = (idCounts[car.id] || 0) + 1;
    });

    const filteredCars = selectedCars.filter((car) => {
      return idCounts[car.id] % 2 !== 0;
    });

    const totalYears = filteredCars.reduce((sum, car) => sum + car.ano, 0);
    const averageYears = totalYears / filteredCars.length;

    alert(
      `A media dos anos dos carros selecionados é ${averageYears.toFixed(0)}`
    );
  };

  const calculateStandardDeviation = () => {
    const media =
      copyData.reduce((total, valor) => total + valor.km, 0) / copyData.length;
    const somaQuadradosDiferencas = copyData.reduce(
      (total, valor) => total + Math.pow(valor.km - media, 2),
      0
    );
    const desvioPadrao = Math.sqrt(
      somaQuadradosDiferencas / (copyData.length - 1)
    );

    alert(`O desvio padrão dos quilômetros é: ${desvioPadrao.toFixed(0)}`);
  };

  return (
    <FildformStyled>
      <form onSubmit={handleSubmit}>
        <div className="search-total">
          {contSelected == 0 ? copyData.length : contSelected}
        </div>
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
            {yearMin}
          </select>

          <select
            name="yearMax"
            id="yearMax"
            onChange={({ target }) =>
              handleChange({ name: target.name, value: target.value })
            }
          >
            <option value="">Ano Max</option>
            {yearMax}
          </select>
        </div>

        <div className="box-price">
          <label htmlFor="priceMin" className="box-input-priceMin">
            <input
              type="text"
              name="priceMin"
              id="priceMin"
              placeholder="Valor Min."
              onChange={({ target }) => {
                handleChange({ name: target.name, value: target.value });
              }}
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

        <div className="box-orderBy-asc">
          <label htmlFor="orderBy">
            Ordenar por:
            <select
              name="orderBy"
              className="orderBy"
              id="orderBy"
              onChange={({ target }) =>
                handleChange({ name: target.name, value: target.value })
              }
            >
              <option value="">Selecione</option>
              <option value="ano">Ano</option>
              <option value="preco">Preço</option>
              <option value="marca">Marca</option>
              <option value="modelo">Modelo</option>
              <option value="quilometragem">Quilometragem</option>
            </select>
          </label>

          <label htmlFor="asc">
            Crescente:
            <input
              type="checkbox"
              className="asc"
              id="asc"
              checked={isActiveAsc}
              onChange={({ target }) => {
                handleChange({ name: "asc", value: target.checked });
                setIsActiveAsc(!isActiveAsc);
              }}
            />
          </label>
        </div>

        <button type="submit">Buscar</button>
        <button onClick={calculateAverage}>Calcular Media</button>
        <button onClick={calculateMoreYears}>Ano Com Mais Carros </button>
        <button onClick={calculateAverageYears}>Media Dos Anos </button>
        <button onClick={calculateStandardDeviation}>
          Desvio Padrão dos km{" "}
        </button>
      </form>
    </FildformStyled>
  );
};

export default Fildform;
