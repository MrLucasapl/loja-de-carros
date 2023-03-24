import styled from "styled-components";

export const HomeStyled = styled.div`
  overflow: auto;
  height: 100vh;
  display: flex;

  .box-cards {
    width: 100%;
    display: grid;
    overflow: auto;
    align-items: center;
    justify-content: center;
    grid-template-areas:
      "card0 card1 card2 card3 card4 card5"
      "card6 card7 card8 card9 card10 card11";
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

  @media (max-width: 2173px) {
    .box-cards {
      grid-template-areas:
        "card0 card1 card2 card3"
        "card4 card5 card6 card7"
        "card8 card9 card10 card11";
    }
  }

  @media (max-width: 1538px) {
    .box-cards {
      grid-template-areas:
        "card0 card1 card2"
        "card3 card4 card5"
        "card6 card7 card8"
        "card9 card10 card11";
    }
  }

  @media (max-width: 1213px) {
    .box-cards {
      grid-template-areas:
        "card0 card1"
        "card2 card3"
        "card4 card5"
        "card6 card7"
        "card8 card9"
        "card10 card11";
    }
  }

  @media (max-width: 930px) {
    .box-cards {
      grid-template-areas:
        "card0" "card1"
        "card2" "card3"
        "card4" "card5"
        "card6" "card7"
        "card8" "card9"
        "card10" "card11";
    }
  }
`;
