import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-top: 40px;
  }
`;

export const Container1 = styled.div`
  display: flex;
  width: 80%;

  @media (max-width: 589px) {
    flex-direction: column;
  }
`;

export const Leftdiv = styled.div`
  display: flex;
  width: 50%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-top: 15%;
`;
export const Rightdiv = styled.div`
  display: flex;
  width: 50%;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  margin-top: 15%;

  @media (max-width: 589px) {
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Heading = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height, or 245% */

  font-feature-settings: "salt" on, "liga" off;
  border-bottom: 5px solid #f26a7e;
  border-radius: 4px;

  color: #404366;

  @media (max-width: 529px) {
    font-weight: 500;
    font-size: 22px;
  }
`;
export const Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
  margin-top: 10%;
  width: 70%;

  @media (max-width: 589px) {
    font-size: 16px;
    line-height: 26px;
    width: 200%;
  }
`;

export const Logo = styled.div`
  position: absolute;
  width: 69px;
  height: 69px;
  left: 68px;
  top: 669px;

  @media (max-width: 600px) {
    width: 42px;
    height: 42px;
    left: 80%;
    top: 20rem;

    filter: drop-shadow(-4.26087px 0px 14.6087px rgba(242, 106, 126, 0.44));
  }
`;
export const Button = styled.button`
  padding: 17px 35px;
  color: #ffffff;
  background: #f26a7e;
  border-radius: 6px;
  border: 0px;
  margin-top: 5%;

  @media (max-width: 589px) {
    display: none;
  }
`;
export const Button1 = styled.button`
  display: none;

  @media (max-width: 589px) {
    padding: 17px 35px;
    display: flex;
    color: #ffffff;
    background: #f26a7e;
    border-radius: 6px;
    border: 0px;
    margin-top: 5%;
  }
`;
