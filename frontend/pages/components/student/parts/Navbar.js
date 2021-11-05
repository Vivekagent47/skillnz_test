import React, { useState } from "react";
import {
  Container,
  Links,
  Link,
  Button,
  Image,
  ImageContainer,
  LinkContainer,
  Menu,
} from "./styles/Navbar.styled";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src="/logo.svg" />
      </ImageContainer>
      <LinkContainer>
        <Menu src="./menu.svg" onClick={handleClick}></Menu>

        <Links onClick={handleClick} click={click}>
          <Link>Post an Internship</Link>
          <Link>Find Internships</Link>
          <Link>Sign In</Link>
          <Button>Sign Up</Button>
        </Links>
      </LinkContainer>
    </Container>
  );
}

export default Navbar;
