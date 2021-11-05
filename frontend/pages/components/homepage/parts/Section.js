import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "./styles/CommonComponents/Container.styled";

const Section = () => {
  return (
    <Container>
      <Top>
        <Left>
          <h1>
            How does it <br /> work?
          </h1>
        </Left>
        <Right>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            nihil labore repudiandae eligendi, animi accusamus facere.
            Perferendis et quaerat eos magni veritatis, itaque unde, quis quas a
            maiores facere.
          </p>
          <button>Apply Now</button>
        </Right>
      </Top>
      <Bottom>
        <Wrap>
          <Image src="/images/1.png" alt="universe" width={400} height={400} />
          <h3>Sign In</h3>
          <p>Create an account to get started</p>
        </Wrap>

        <Wrap>
          <Image src="/images/2.png" alt="universe" width={350} height={350} />
          <h3>Search for internships</h3>
          <p>Look thorugh our carefully handpicked bunch of internships</p>
        </Wrap>

        <Wrap>
          <Image src="/images/3.png" alt="universe" width={350} height={350} />
          <h3>Apply and follow procedure</h3>
          <p>Now sit back and wait for the call back and follow simple steps</p>
        </Wrap>
      </Bottom>
    </Container>
  );
};

export default Section;

const Top = styled.div`
  display: flex;
  margin-bottom: 4rem;
  @media (max-width: 945px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex-basis: 50%;
  h1 {
    font-weight: 800;
    font-size: 72px;
    color: #404366;
    margin-bottom: 1rem;
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    margin-bottom: 1em;
  }
  button {
    background: #f26a7e;
    border-radius: 4px;
    padding: 10px 26px;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 6rem;
  @media (max-width: 945px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-gap: 1rem;
  }
`;

const Wrap = styled.div`
  border: 1px solid lightgrey;
  padding: 2.5rem;
  text-align: center;
  border-radius: 6px;
  img {
    width: 100%;
    object-fit: contain;
  }
  h3 {
    margin-bottom: 1em;
  }
`;
