import styled from "styled-components";

export const ContainerSpinner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spinner-loading {
    display: block;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
