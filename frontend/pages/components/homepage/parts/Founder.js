import React from "react";
import { Container } from "./styles/CommonComponents/Container.styled";
import styled from "styled-components";

const Founder = () => {
  return (
    <FounderContainer>
      <Container>
        <Split>
          <h1>Founder’s Note</h1>

          <div className="desc">
            <img src="“.png" alt="" />
            <div className="desc_right">
              <p>
                We had an incredible experience working with Skilzen and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product. Our team is so grateful
                for the wonderful improvements they made and their ability to
                get familiar with the product concept so quickly. It acted as a
                catalyst to take our design to
              </p>
              <h4>Full Name</h4>
              <span>CEO at Skilzen</span>
            </div>
          </div>

          <Right>
            <img src="Founder.png" alt="" />
          </Right>
        </Split>
        <Team>
          <h2>
            Our <span> Team</span>
          </h2>

          <div className="team_members">
            <div className="wrap">
              <img src="team1.png" alt="" />
              <p>Lead Designer</p>
            </div>

            <div className="wrap">
              <img src="team2.png" alt="" />
              <p>Marketing</p>
            </div>

            <div className="wrap">
              <img src="team3.png" alt="" />
              <p>Lead Developer</p>
            </div>

            <div className="wrap">
              <img src="team4.png" alt="" />
              <p>Graphic Designer</p>
            </div>
          </div>
        </Team>
      </Container>
    </FounderContainer>
  );
};

export default Founder;

const FounderContainer = styled.div`
  background-color: #c9cbe2;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  h1 {
    font-weight: 800;
    font-size: 72px;
    color: #404366;
    grid-column: 1;
    grid-row: 1;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      grid-column: 1/3;
      font-size: 52px;
    }
  }
  .desc {
    display: flex;
    align-items: flex-start;
    .desc_right {
      h4 {
        font-weight: bold;
        font-size: 18px;
        color: #f26a7e;
      }
      span {
        font-weight: normal;
        font-size: 16px;
        color: #404366;
      }
    }
    img {
      object-fit: contain;
      margin-right: 2rem;
    }
    grid-column: 1;
    grid-row: 2;
    @media (max-width: 600px) {
      grid-column: 1/3;
      grid-row: 3;
    }
    p {
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      color: #404366;
      margin-bottom: 2rem;
      @media (max-width: 600px) {
      }
      @media (max-width: 800px) {
        font-size: 22px;
      }
    }
  }
`;
const Left = styled.div``;
const Right = styled.div`
  grid-column: 2;
  grid-row: 1 / 3;
  order: 3;
  margin-left: 2rem;
  @media (max-width: 600px) {
    grid-row: 2;
    grid-column: 1/3;
    margin: 2rem 0;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
    @media (max-width: 600px) {
    }
  }
`;

const Team = styled.div`
  display: flex;
  margin-top: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    /* overflow-x: scroll; */
  }
  align-items: flex-end;
  .team_members {
    display: flex;
    width: 100%;
    @media (max-width: 600px) {
      overflow-x: scroll;
      margin-top: 1.5rem;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    .wrap {
      margin: 0 1.3rem;
    }
  }
  h2 {
    display: flex;
    font-weight: 400;
    font-size: 21.2442px;
    span {
      font-weight: 600;
      font-size: 21.2442px;
      margin-left: 0.3rem;
    }
  }
`;
