import React from "react";
import { Container } from "./styles/CommonComponents/Container.styled";
import styled from "styled-components";
import Tabs from "../Tabs";

const TabItem = (props) => <div {...props} />;
const AboutUs = () => {
  return (
    <Container>
      <Split>
        <Left>
          <div className="tabs">
            <Tabs defaultIndex="1" onTabClick={console.log}>
              <TabItem label="About us" index="1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                id illum sint, at minus est laudantium aliquam recusandae
                debitis exercitationem iusto error excepturi repellat earum esse
                quibusdam. Consequuntur, dolor quidem.
              </TabItem>
              <TabItem label="Our mission" index="2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, pariatur.
              </TabItem>
            </Tabs>
          </div>
        </Left>
        <Right>
          <img src="aboutus.png" alt="hello" />
        </Right>
      </Split>
    </Container>
  );
};

export default AboutUs;

const Split = styled.div`
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  margin-top: 3rem;
  flex-basis: 50%;
  @media (max-width: 860px) {
    margin-top: 0;
  }
  .tabs {
    margin-top: 3rem;
  }
  .head {
    display: flex;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    @media (max-width: 860px) {
      margin-top: 0;
      margin-bottom: 1em;
    }
    h1 {
      font-weight: bold;
      font-size: 40px;
      color: #404366;
      text-decoration: underline;
      @media (max-width: 1000px) {
        font-size: 35px;
      }
      &:last-child {
        color: #c9cbe2;
        margin-left: 2rem;
        text-decoration: none;
      }
    }
  }
  .body {
    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 32px;
      @media (max-width: 1000px) {
        font-size: 17px;
      }
    }
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;

const CustomTabs = styled(Tabs)`
  padding: 3rem;
`;
