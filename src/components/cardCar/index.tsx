import React from "react";
import { CardCarProps } from "../../global";
import { formatKm } from "../../util/formatKm";
import { CardCarStyled } from "./style";

const CardCar: React.FC<CardCarProps> = ({
  values,
  setSelectedCars,
  selectedCars,
}) => {
  const [selectedCount, setSelectedCount] = React.useState(0);

  const toggleSelected = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = event.target as HTMLElement;
    const card = target.closest(".container");
    if (card) {
      card.classList.toggle("selected");
      setSelectedCount(
        selectedCount + (card.classList.contains("selected") ? 1 : -1)
      );
      const car = values.find((car) => car.id === Number(card.id));
      if (car) {
        setSelectedCars((selectedCars) => {
          const index = selectedCars.findIndex(
            (selectedCar) => selectedCar.id === car.id
          );
          if (index >= 0) {
            return [
              ...selectedCars.slice(0, index),
              ...selectedCars.slice(index + 1),
            ];
          } else {
            return [...selectedCars, car];
          }
        });
      }
    }
  };

  const carItems = React.useMemo(
    () =>
      values.map((car, index) => {
        const selected = selectedCars.some(
          (selectedCar) => selectedCar.id === car.id
        );
        return (
          <CardCarStyled
            key={car.id}
            area={String(index)}
            onClick={(event) => toggleSelected(event)}
            className={selected ? "selected" : ""}
          >
            <div
              id={String(car.id)}
              className={selected ? "selected container" : "container"}
            >
              <img
                className="img"
                src={car.imagem}
                alt={car.marca + "-" + car.modelo}
              />
              <span className="marca">{car.marca}</span>
              <h3 className="modelo">{car.modelo}</h3>
              <p className="combustivel">{car.combustivel}</p>
              <div className="box-preco-ano-km">
                <strong className="preco">
                  {car.preco.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <div>
                  <p className="ano">{car.ano}</p>
                  <p className="km">{formatKm(car.km)} KM</p>
                </div>
              </div>
              <p className="status">{car.usado ? "Usado" : "Novo"}</p>
              <button>Comprar</button>
            </div>
          </CardCarStyled>
        );
      }),
    [values, selectedCars]
  );

  return <>{carItems}</>;
};

export default CardCar;
