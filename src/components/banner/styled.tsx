import styled from "styled-components";

export const BannerStyled = styled.div`
  bottom: 0;
  left: 50%;
  width: 50%;
  min-width: 320px;
  padding: 10px;
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: #f2f4f6;
  transform: translateX(-50%);
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.1);

  .banner-content {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }

  #timer {
    width: 100%;
    display: flex;
    font-weight: 900;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
  }

  #offer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-info {
    display: flex;
    justify-content: center;
  }

  img {
    width: 20%;
  }

  .box-detail {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .box-model-brand-year {
    width: 100%;
    display: flex;
    color: #f30909;
    font-weight: 900;
    font-size: 1.5rem;
    justify-content: space-around;
  }

  .box-price {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .price-original {
    opacity: 0.5;
    padding-left: 8px;
    color: #f30909;
    font-size: 1.2rem;
    margin-right: 10px;
    text-decoration: line-through;
  }

  .price-discount {
    color: #f30909;
    padding-left: 8px;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 10px;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 989px) {
    img {
      display: none;
    }

    #timer {
      font-size: 1rem;
    }

    .box-model-brand-year {
      font-size: 1rem;
    }

    .price-original {
      font-size: 1rem;
    }

    .price-discount {
      font-size: 0.9rem;
    }
  }
`;
