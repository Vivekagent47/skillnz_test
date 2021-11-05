import React from "react";
import styled from "styled-components";
import { Container } from "./styles/CommonComponents/Container.styled";

function Categories() {
  return (
    <Container>
      <Top>
        <Left>
          <h1>
            50+ <br /> Categories
          </h1>
        </Left>
        <Right>
          <p>
            Explore our handpicked catagory of Internships and unlock your
            journey with us today! Select one to view the internships
          </p>
          <h5>View all internships</h5>
        </Right>
      </Top>
      <Bottom>
        <Wrap>
          <img src="engg.svg" alt="" />
          <h3>Engineering</h3>
        </Wrap>
        <Wrap>
          <img src="commerce.svg" alt="" />
          <h3>Commerce</h3>
        </Wrap>
        <Wrap>
          <img src="level.svg" alt="" />
          <h3>Management</h3>
        </Wrap>
        <Wrap>
          <img src="medical.svg" alt="" />
          <h3>Medical</h3>
        </Wrap>
        <Wrap>
          <img src="science.svg" alt="" />
          <h3>Science</h3>
        </Wrap>
        <Wrap>
          <img src="LT.svg" alt="" />
          <h3>L.T</h3>
        </Wrap>
        <Wrap>
          <img src="humanities.svg" alt="" />
          <h3>Humanities</h3>
        </Wrap>
        <Wrap>
          <img src="law.svg" alt="" />
          <h3>Law</h3>
        </Wrap>
        <Wrap>
          <img src="arts.svg" alt="" />
          <h3>Arts</h3>
        </Wrap>
        <Wrap>
          <button>View more</button>
        </Wrap>
      </Bottom>
    </Container>
  );
}

export default Categories;

const Top = styled.div`
  display: flex;
  * {
    flex-basis: 100%;
  }
  margin-bottom: 5%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Bottom = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1160px) {
    flex-direction: column;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (max-width: 800px) {
    flex-direction: column;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (max-width: 600px) {
    flex-direction: column;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const Left = styled.div`
  h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    color: #404366;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      font-size: 44px;
    }
  }
`;
const Right = styled.div`
  margin-left: 2rem;
  @media (max-width: 800px) {
    margin-left: 0;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    margin-bottom: 4%;
  }
  h5 {
    text-decoration: underline;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #18191f;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border: 1px solid lightgrey;
  border-radius: 7px;
  &:first-child {
    background: #fff8f8;
  }
  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
  img {
    object-fit: cover;
    width: 100%;
    padding: 20%;
  }

  h3 {
    font-size: 1em;
  }
  button {
    padding: 10px 10px;
    border-radius: 4px;
    border: 1px solid #f26a7e;
    background-color: #fff;
    cursor: pointer;
  }
`;
