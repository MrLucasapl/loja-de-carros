import React from "react";
import { Ibanner } from "../../global";
import { BannerStyled } from "./styled";

const Banner = ({ closingTime, copyData }: Ibanner) => {
  const [closed, setClosed] = React.useState(false);
  const [remainingTime, setRemainingTime] = React.useState<number>(() => {
    const now = new Date().getTime();
    const closingTimeMs = closingTime.getTime();
    return closingTimeMs - now;
  });
  const intervalRef = React.useRef<number>(remainingTime);

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!closed) {
        countdown();
      }
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [closed]);

  const handleClose = () => {
    setClosed(true);
  };

  const countdown = () => {
    if (remainingTime < 0) {
      setClosed(true);
      clearInterval(intervalRef.current);
    } else {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 1000);
    }
  };

  if (closed) {
    return null;
  }

  const carroMenorPreco = copyData.reduce((carro1, carro2) =>
    carro1.preco < carro2.preco ? carro1 : carro2
  );

  const precoComDesconto = carroMenorPreco.preco * 0.75;

  const precoOriginalFormatado = carroMenorPreco.preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const precoComDescontoFormatado = precoComDesconto.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);

  return (
    <BannerStyled>
      <div className="banner-content">
        <div>
          <button className="close-button" onClick={handleClose}>
            Fechar
          </button>
        </div>
        <div id="offer">
          <div className="box-info">
            <img src={carroMenorPreco.imagem} alt="" />
            <div className="box-detail">
              <div id="timer">
                <span>Este oferta termina em:</span>
                <span>
                  {hours}h {minutes}m {seconds}s
                </span>
              </div>

              <div className="box-model-brand-year">
                <p>{carroMenorPreco.modelo} </p>
                <p>{carroMenorPreco.marca} </p>
                <p>{carroMenorPreco.ano} </p>
              </div>
              <div className="box-price">
                <p>
                  De
                  <strong className="price-original">
                    {precoOriginalFormatado}
                  </strong>
                  Por Apenas
                  <strong className="price-discount">
                    {precoComDescontoFormatado}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;
