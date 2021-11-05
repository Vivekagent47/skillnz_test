import styled from "styled-components";

const Container = styled.div`
  background-color: #fcfcfc;
  margin: 0 auto;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 932px) {
    padding: 50px;
  }
  @media (max-width: 600px) {
    padding: 10px;
  }
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-top: 40px;
    margin-left: 30px;
  }
`;
const Top = styled.div`
  display: flex;
  @media (max-width: 932px) {
    flex-direction: column;
  }
  .left {
    flex: 0.5;
    h1 {
      font-size: 72px;
      color: #404366;
      max-width: 500px;
      @media (max-width: 600px) {
        font-size: 52px;
      }
    }
  }
  .right {
    margin-left: 20px;
    flex: 0.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 932px) {
      margin-left: 0;
      margin-top: 20px;
    }
    h5 {
      font-weight: 500;
      font-size: 20px;
      line-height: 32px;
      @media (max-width: 932px) {
        font-size: 15px;
        line-height: 22px;
      }
    }
    button {
      margin-top: 30px;
      background-color: #f26a7e;
      color: #fff;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 4px;
    }
  }
`;
const Bottom = styled.div`
  display: grid;
  margin-top: 100px;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 20px;
  @media (max-width: 932px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 30px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  background-color: #fff;
  border: 1px solid lightgray;
  padding: 15px;
  text-align: center;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    object-fit: contain;
    max-height: 240px;
  }
  h3 {
    font-weight: 600;
    font-size: 24px;
  }
`;

export { Container, Top, Bottom, Wrap };
