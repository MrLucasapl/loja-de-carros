import React from "react";
import { HeaderStyled } from "./style";

const Header = () => {

  return (
    <HeaderStyled>
      <div>
        <label htmlFor="orderBy">Ordenar por:</label>
        <select id="orderBy" /* onChange={handleOrderByChange} */>
          <option value="marca">Marca</option>
          <option value="modelo">Modelo</option>
          <option value="preco">Preço</option>
          <option value="ano">Ano</option>
          <option value="km">Quilometragem</option>
        </select>
        <label htmlFor="asc">Crescente:</label>
        <input
          type="checkbox"
          id="asc"
          /* checked={asc} */
          /* onChange={handleAscChange} */
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;
