import styled from "styled-components";

export const HomeStyled = styled.div`
  .box-input {
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    input, select {
      width: 40%;
      height: 30px;
      font-weight: 500;
      font-size: 1rem;
      padding: 0px 9px;
      border-radius: 7px;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }
  }

  .box-cards {
    gap: 0.8%;
    display: grid;
    margin: 0 auto;
    max-width: 1448px;
    grid-template-columns: repeat(auto-fit, minmax(231px, 1fr));
  }

  form{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
