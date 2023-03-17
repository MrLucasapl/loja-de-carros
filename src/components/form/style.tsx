import styled from "styled-components";

export const FildformStyled = styled.div`
  width: 300px;
  display: flex;
  height: inherit;
  background-color: rgb(10, 39, 65);

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

  form {
    height: 75%;
    padding: 5%;
    display: flex;
    min-width: 300px;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
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
`;
