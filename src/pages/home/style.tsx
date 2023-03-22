import styled from "styled-components";

export const HomeStyled = styled.div`
  overflow: auto;
  height: 100vh;
  display: flex;

  .box-cards {
    gap: 0.8%;
    width: 100%;
    height: 100%;
    display: grid;
    margin: 0px auto;
    overflow: auto;
    max-width: 1500px;
    grid-template-columns: repeat(auto-fit, minmax(231px, 1fr));
  }

  select::-webkit-scrollbar,
  .box-cards::-webkit-scrollbar {
    width: 0px;
  }

  .erro {
    width: 100vw;
    height: 100vh;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
  }
`;
