import styled from "styled-components";

export const HeroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 866px) {
    flex-direction: column;
  }
`;

export const HeroContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  background-color: #f5f5f5;

  // @media (max-width: 783px) {
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-top: 40px;
  }
`;

export const HeroLeft = styled.div`
  ${"" /* height: 65vh; */}
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${"" /* align-items: center; */}
  ${"" /* text-align: center; */}
    margin-left: 130px;
  @media (max-width: 783px) {
    height: 350px;
  }
  @media (max-width: 1129px) {
    margin-left: 50px;
  }
  @media (max-width: 903px) {
    margin-left: 30px;
  }
`;

export const HeroRight = styled.div`
  height: 400px;

  @media (max-width: 783px) {
    text-align: center;
    margin-top: -30px;
    margin-bottom: -30px;
    height: min-content;
  }
`;

export const Image = styled.img`
  width: 538px;
  height: 100%;
  @media (max-width: 1129px) {
    width: 439px;
  }
  @media (max-width: 783px) {
    width: 365px;
    height: 354px;
  }
  @media (max-width: 392px) {
    width: 265px;
    height: 254px;
  }
  @media (max-width: 954px) {
    width: 390px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #f26a7e;
  margin-right: 20px;
  color: #fff;
  padding: 17px 35px;
  font-size: 16px;
  border: none;
  margin-bottom: 1em;
  border-radius: 6px;
  &:hover {
    background-color: #fc5b73;
    transition: all 0.3s ease;
  }
`;

export const Para = styled.p`
  width: 420px;
  color: #404366;
  line-height: 25px;
  font-style: italic;
  font-weight: 500;
  padding: 15px 0;
  @media (max-width: 783px) {
    width: 332px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
  @media (max-width: 392px) {
    width: 300px;
  }
  @media (max-width: 341px) {
    width: 280px;
  }
`;

export const Writer = styled.span`
  font-weight: 500;
`;

export const Heading = styled.h1`
  font-size: 45px;
  color: #404366;
  margin-bottom: 50px;

  @media (max-width: 783px) {
    font-size: 36px;
    margin-bottom: 13px;
    margin-top: 0;
  }
  @media (max-width: 404px) {
    font-size: 30px;
  }
`;

export const Head = styled.span`
  font-size: 51px;
  font-weight: bold;

  @media (max-width: 783px) {
    font-size: 44px;
  }
  @media (max-width: 404px) {
    font-size: 36px;
  }
`;

export const HeroSearch = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 170px;
  margin-bottom: 40px;
  @media (max-width: 783px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const HeroSearchLeft = styled.div`
  background-color: #f9bfc2;
  padding: 10px 9px;
  border-radius: 50%;
  margin-right: 60px;
  @media (max-width: 783px) {
    margin-right: 0px;
    position: absolute;
    right: 10px;
    top: 50%;
    box-shadow: rgba(242, 106, 126, 0.25) 0px 54px 55px,
      rgba(242, 106, 126, 0.12) 0px -12px 30px,
      rgba(242, 106, 126, 0.12) 0px 4px 6px,
      rgba(242, 106, 126, 0.17) 0px 9px 13px,
      rgba(242, 106, 126, 0.09) 0px -3px 5px;
  }
`;

export const HeroSearchRight = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 4px;
  height: 45px;
  margin-top: 5px;
  flex: 1;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 4px;
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-left: 30px;
  }
`;

export const Img = styled.img`
  width: 34px;
  height: 25px;
`;

export const SearchImg = styled.img`
  width: 34px;
  height: 25px;
  @media (max-width: 783px) {
    width: 24px;
    height: 16px;
    color: #f26a7e;
  }
`;

export const SearchIcon = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  background-color: #fff;
  @media (max-width: 783px) {
    margin-left: 0;
    margin-right: 5px;
  }
`;

export const SearchField = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 0;
  color: #404366;
  font-size: 16px;
  font-weight: 400;
  &::placeholder {
    color: #c9cbe2;
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 783px) {
    &::placeholder {
      font-size: 13px;
    }
  }
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  background-color: #404366;
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  width: 100%;
  border: none;
  padding: 13px 38px;
  border-radius: 4px;
  &:hover {
    background-color: #404355;
    transition: all 0.3s ease;
  }
  @media (max-width: 783px) {
    margin-right: 0;
    font-size: 14px;
    padding: 14px 30px;
  }
`;

export const SearchButton = styled.div``;
