import styled from "styled-components";

export const HomeStyled = styled.div`
  overflow: auto;
  height: 100vh;
  display: flex;

  .box-forms {
    height: 100vh;
  }

  .box-cards {
    gap: 0.8%;
    width: 100%;
    height: 90%;
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
    height: 100vh;
    display: flex;
    font-size: 2rem;
    align-items: center;
    justify-content: center;
  }
`;
