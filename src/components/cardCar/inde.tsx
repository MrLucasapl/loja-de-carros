import React from "react";
import { Icar } from "../../global";
import { formatKm } from "../../util/formatKm";
import { CardCarStyled } from "./style";

interface CardCarProps {
  values: Icar[];
}

const CardCar: React.FC<CardCarProps> = ({ values }) => {
  const carItems = React.useMemo(
    () =>
      values.map((car) => (
        <CardCarStyled key={car.id}>
          <div className="container">
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
      )),
    [values]
  );

  return <>{carItems}</>;
};

export default CardCar;
