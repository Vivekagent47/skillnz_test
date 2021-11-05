import React, { useEffect, useState } from "react";
import {
  Container,
  Links,
  StyledLink,
  Button,
  Image,
  ImageContainer,
  LinkContainer,
  Menu,
  Avatar,
} from "./styles/Navbar.styled";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data: session, status } = useSession();
  console.log({ session, status });
  const [user, setUser] = useState(null);
  const [click, setClick] = useState(false);
  console.log(user);
  useEffect(() => {
    setUser(localStorage.getItem("access_token"));
  }, []);

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
          {user ? (
            <>
              <StyledLink>About Us</StyledLink>
              <StyledLink>Contact Us</StyledLink>
              <Button>Find internships</Button>
            </>
          ) : (
            <>
              <StyledLink>Post an Internship</StyledLink>
              <StyledLink>Find Internships</StyledLink>

              <Link href="/signin">
                <StyledLink>Sign In</StyledLink>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </Links>
      </LinkContainer>
    </Container>
  );
}

export default Navbar;
