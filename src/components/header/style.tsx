import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  padding-right: 30px;
  align-items: center;
  justify-content: flex-end;
  background-color: rgb(10, 39, 65);

  form{
    display: flex;
  }

  select {
    width: 50%;
    height: 44px;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 7px;
  }

  textarea:focus,
  input:focus,
  select:focus {
    outline: none;
  }

  label {
   display: flex;
    color: #e9ecef;
    margin-left: 10px;
    align-items: center;
    font-size: 1.225rem;
    justify-content: space-between;
  }

  input {
    width: 20px;
    height: 44px;
    cursor: pointer;
    display: flex;
    margin-left: 5px;
  }
`;
