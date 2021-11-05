import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Image1 = styled.img`
  position: absolute;
  right: 4.17%;
  width: 251px;
  height: 245px;
  z-index: -1;
  @media (max-width: 1138px) {
    right: 2%;
  }
`;

export const Image2 = styled.img`
  position: absolute;
  bottom: -125px;
  left: 0;
  z-index: -1;
  width: 449px;
  height: 439px;

  @media (max-width: 478px) {
    width: 300px;
    bottom: -280px;
  }
  @media (max-width: 295px) {
    width: 170px;
  }
`;

export const MiniContainer = styled.div`
  width: 77.5%;
  margin: 40px auto;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  ${
    ""
    /* height: 670px;
     */
  }
   height: auto;

  @media (max-width: 1138px) {
    width: 85%;
  }
  @media (max-width: 446px) { */}
    margin: 30px auto;
  } 
`;

export const LeftDiv = styled.div`
  height: 670px;
  background-color: #ffd9df30;
  width: 45%;
  ${"" /* flex: 1.5; */}
  border-top-left-radius: 20px;
  position: relative;
  @media (max-width: 1025px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  padding: 45px 80px;
  width: 50%;
  @media (max-width: 1025px) {
    width: 100%;
  }
  @media (max-width: 622px) {
    padding: 25px 30px;
  }
`;

export const Cross = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const SignupImg = styled.img`
  position: absolute;
  bottom: 50px;
  height: 45%;
  ${"" /* width: 390px; */}
  width: 80%;
  left: 40px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 30px;
`;

export const Heading = styled.h1`
  color: #ec1f28;
  font-weight: 600;
  font-size: 38px;
  line-height: 40.83px;
  margin-right: -35px;
  @media (max-width: 511px) {
    font-size: 30px;
  }
`;

export const SubHeading = styled.h3`
  color: #404366;
  font-size: 27px;
  line-height: 30.73px;
  font-weight: 600;
  margin-top: 3.8%;
  margin-bottom: 3.8%;
  @media (max-width: 511px) {
    font-size: 20px;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 26px;
  @media (max-width: 511px) {
    width: 150px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  @media (max-width: 511px) {
    width: 30px;
    height: 30px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* width: 400px; */}
  width: 100%;
  margin-top: 16px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* border: 1px solid green; */}
  width: 80%;
  margin-right: 20px;
`;

export const InputSeperate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const InputName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #404366;
`;

export const Star = styled.span`
  font-size: 12px;
  color: #ff5f66;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.76489px solid #a9accb;
  outline: none;
  padding-top: 10px;
  padding-bottom: 4px;
  ${"" /* border:1px solid red; */}
  width: 100%;
  &::placeholder {
    color: #c9cbe2;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.83px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

export const CheckboxField = styled.input`
  margin-right: 7px;
`;

export const CheckboxText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #404366;
`;

export const SignupButton = styled.button`
  font-size: 14px;
  color: #404366;
  font-weight: 500;
  border: 1px solid #ff5f66;
  border-radius: 5px;
  padding: 10px 23px;
  background-color: #fff;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ff5f66;
    color: #fff;
  }
`;

export const SignupText = styled.p`
  font-size: 12px;
  color: #404366;
  margin-top: 8px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const Pink = styled.span`
  color: #ff5f66;
  cursor: pointer;
`;
