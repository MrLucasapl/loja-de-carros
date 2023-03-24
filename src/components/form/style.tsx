import styled from "styled-components";

export const FildformStyled = styled.div`
  width: 300px;
  height: 88%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: ${({display}:{display: any}) => display};
  overflow: auto;
  background-color: #0a2741;

  p {
    width: 10%;
    background-color: #e9ecef;
  }

  .show{
    display: none;
  }

  form {
    height: 130vh;
    padding: 0% 5%;
    display: flex;
    min-width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }

  &::-webkit-scrollbar,
  form::-webkit-scrollbar {
    width: 0px;
  }

  .search-total {
    padding: 15px;
    color: #e9ecef;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    border: 2px solid #e9ecef;
  }

  .box-input-search {
    width: 100%;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    background-color: #e9ecef;
  }

  button {
    width: 100%;
    padding: 4%;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    background-color: #a5ec70;
    border: 1px solid #a5ec70;
  }

  input {
    width: 100%;
    height: 44px;
    font-size: 1rem;
    padding: 0px 9px;
    border-radius: 7px;
  }

  select {
    width: 100%;
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

  .box-year-select,
  .box-price,
  .box-km {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #yearMax,
    #yearMin,
    .box-input-priceMin,
    .box-input-priceMax,
    .box-input-kmMin,
    .box-input-kmMax {
      width: 45%;
    }
  }

  .box-checkbox {
    width: 100%;
    display: flex;
    border-radius: 0.5rem;
    justify-content: center;
    border: 2px solid #e9ecef;

    .box-input-newCar,
    .box-input-usedCar {
      width: 100%;
      display: flex;
      cursor: pointer;
      color: #e9ecef;
      align-items: center;
      justify-content: space-evenly;
      font-size: 1.225rem;

      #newCar,
      #usedCar {
        width: 20px;
        cursor: pointer;
      }
    }
  }

  .box-orderBy-asc {
    width: 100%;
    display: flex;
    color: #e9ecef;
    justify-content: space-between;

    label[for="asc"],
    label[for="des"] {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .asc,
      .des {
        width: 20px;
      }
    }
    label[for="orderBy"] {
      width: 100%;
    }
  }

  @media (max-width: 584px) {
    
  }
`;
