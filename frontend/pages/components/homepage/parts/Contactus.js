import React from "react";
import Image from "next/image";

import {
  Container,
  Container1,
  Leftdiv,
  Rightdiv,
  Button,
  Button1,
  Heading,
  Text,
  Logo,
} from "./styles/Contactus.styled";
import { ApplyNow } from "./styles/CommonComponents/ApplyNow.styled";

import help from "../../../../public/help.svg";
import mainimg from "../../../../public/contactus1.svg";



function Contactus() {
  return (
    <Container>
      <Container1>
        <Leftdiv>
          <Heading>Contact us</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer dolor sit amet, consectetur
            adipiscing elit. Nunc odio in et. id integer dolor sit amet,
            consectetur adipiscing elit. Net.
          </Text>
          <Button>Join Skilzen</Button>
          <Logo></Logo>
        </Leftdiv>
        <Rightdiv>
          <Image src={mainimg} alt="rightimg" />
        </Rightdiv>
      </Container1>
    </Container>
  );
}

export default Contactus;
