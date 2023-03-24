import styled from "styled-components";

export const CardCarStyled = styled.section`
  grid-area: ${({ area }: { area: string }) => "card" + area};
  margin: 10px;
  width: 286px;
  height: 500px;

  .container:hover {
    background-color: #fff;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.256);
  }

  .container {
    display: flex;
    padding: 15px;
    cursor: pointer;
    overflow: hidden;
    flex-direction: column;
    border-radius: 0.975rem;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0.125rem 0.625rem #0000000a;
  }

  .selected {
    box-shadow: 0 0 20px #a6ec70;
  }

  .marca,
  .marca,
  .status,
  .combustivel {
    padding: 7px 0px;
    color: #5c7286;
    font-size: 0.75rem;
  }

  .box-preco-ano-km {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      color: #5c7286;
      text-align: end;
      font-size: 0.75rem;
      align-items: flex-end;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .preco {
    padding: 6%;
    font-weight: 700;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    border: 1px solid #e9ecef;
  }

  .status {
    padding: 8% 0px;
    font-weight: 700;
  }

  .img {
    width: 100%;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 0.975rem;
  }

  button {
    padding: 4%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    background-color: #a5ec70;
    border: 1px solid #a5ec70;
  }
`;
