import React, { ChangeEvent } from "react";
import { IheaderProps } from "../../global";
import { HeaderStyled } from "./style";

const Header = ({ copyData, setCopyData }: IheaderProps) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [orderBy, setOrderBy] = React.useState<string>("");

  const hendleClick = () => {
    setIsActive(!isActive);
  };

  const handleOrderByChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    switch (orderBy) {
      case "preco":
        setCopyData(copyData.sort((a, b) => a.preco - b.preco));
        location.reload();
        break;

      default:
        break;
    }
  }, [isActive, orderBy]);

  return (
    <HeaderStyled>
      <form>
        <label htmlFor="orderBy">
          Ordenar por:
          <select id="orderBy" onChange={handleOrderByChange}>
            <option value="marca">Marca</option>
            <option value="modelo">Modelo</option>
            <option value="preco">Preço</option>
            <option value="ano">Ano</option>
            <option value="km">Quilometragem</option>
          </select>
        </label>

        <label htmlFor="asc">
          Crescente:
          <input
            type="checkbox"
            id="asc"
            checked={isActive}
            onChange={hendleClick}
          />
        </label>
      </form>
    </HeaderStyled>
  );
};

export default Header;
