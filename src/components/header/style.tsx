import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: rgb(10, 39, 65);

  select {
    width: 50%;
    height: 44px;
    cursor: pointer;
    font-size: 1rem;
    padding: 0px 9px;
    border-radius: 7px;
  }

  textarea:focus,
  input:focus,
  select:focus {
    outline: none;
  }
`;
