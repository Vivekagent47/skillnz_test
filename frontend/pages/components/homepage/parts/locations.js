import styled from "styled-components";
import Image from "next/image";
import ncr from "../../../../public/delhincr.svg";
import bengaluru from "../../../../public/bengaluru.svg";
import chennai from "../../../../public/chennai.svg";
import hyderabad from "../../../../public/hyderabad.svg";
import kolkata from "../../../../public/kolkata.svg";
import mumbai from "../../../../public/mumbai.svg";
import pune from "../../../../public/pune.svg";
import wfh from "../../../../public/wfh.svg";
import { Container } from "./styles/CommonComponents/Container.styled";

function Locations() {
  return (
    <Container>
      <Top>
        <Left>
          <h1>Location</h1>
        </Left>
        <Right>
          <p>
            We are currently encouraging Work From Home Internships for the
            safety for all our loved ones. Find the best internship
            opportunities here to launch your professional career.
          </p>
        </Right>
      </Top>
      <Bottom>
        <Wrap>
          <img src="/delhincr.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>

        <Wrap>
          <img src="/bengaluru.svg" alt="" />
          <h5>Bengaluru</h5>
        </Wrap>

        <Wrap>
          <img src="/chennai.svg" alt="" />
          <h5>Chennai</h5>
        </Wrap>

        <Wrap>
          <img src="/hyderabad.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>

        <Wrap>
          <img src="/kolkata.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>
      </Bottom>
    </Container>
  );
}

export default Locations;

const Top = styled.div`
  margin-bottom: 3rem;
`;
const Left = styled.div`
  h1 {
    font-weight: 800;
    font-size: 72px;
    color: #404366;
  }
`;
const Right = styled.div`
  p {
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
  }
`;
const Bottom = styled.div`
  display: flex;
  margin-inline: auto;
  max-width: min(100%, 60rem);
  flex-flow: row wrap;
  gap: 20px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 200px;
  flex-basis: 23%;
  img {
    object-fit: cover;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    flex-basis: 31%;
  }
  @media (max-width: 600px) {
    flex-basis: 47%;
  }
`;
