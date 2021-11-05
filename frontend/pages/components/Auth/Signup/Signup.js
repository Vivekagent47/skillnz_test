import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  Container,
  Image1,
  Image2,
  MiniContainer,
  LeftDiv,
  RightDiv,
  Cross,
  SignupImg,
  Logo,
  Heading,
  SubHeading,
  IconsDiv,
  Icon,
  Info,
  Star,
  Input,
  InputName,
  InputField,
  InputSeperate,
  CheckboxContainer,
  CheckboxField,
  CheckboxText,
  SignupText,
  SignupButton,
  Wrap,
  Pink,
} from "./styles/Signup.styled";
import { signIn } from "next-auth/react";
import axios from "../../../../utils/axios";
import router, { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  // const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");
  // const [repass, setrepass] = useState("");

  const onCreateuser = (e) => {
    e.preventDefault();
    const userdata = {
      name: fname,
      email: email,
      password: pass,
    };

    axios
      .post("/register", userdata)
      .then((res) => {
        console.log(res.data);
        router.push("/signin");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <Container>
      <Image1 src="/bg1.svg" />
      <Image2 src="/bg2.svg" />
      <MiniContainer>
        <LeftDiv>
          <Logo src="/skilzenlogo.png" />
          <SignupImg src="/signup.png" />
        </LeftDiv>
        <RightDiv>
          <Heading>Lets get you started!</Heading>
          <SubHeading>Sign Up</SubHeading>
          <IconsDiv>
            <Icon
              onClick={() => {
                signIn("facebook", {
                  callbackUrl: "http://localhost:3000",
                });
              }}
              src="/fb.svg"
            />
            <Icon
              onClick={() => {
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                });
              }}
              src="/google.svg"
            />
            <Icon
              onClick={() =>
                signIn("linkedin", {
                  callbackUrl: "http://localhost:3000",
                })
              }
              src="/linkedin.svg"
            />
          </IconsDiv>
          <Info>
            <Input>
              <InputName>
                First Name <Star>*</Star>
              </InputName>
              <InputField
                type="text"
                placeholder="John"
                onChange={(e) => setFname(e.target.value)}
              ></InputField>
            </Input>
            <Input>
              <InputName>
                Last Name <Star>*</Star>
              </InputName>
              <InputField
                type="text"
                placeholder="Doe"
                // onChange={(e) => setLname(e.target.value)}
              ></InputField>
            </Input>
          </Info>
          <Info>
            <Input>
              <InputName>
                Email Address <Star>*</Star>
              </InputName>
              <InputField
                type="email"
                placeholder="Johndoe@gmail.com"
                onChange={(e) => setemail(e.target.value)}
              ></InputField>
            </Input>
            <Input>
              <InputName>
                Mobile Number <Star>*</Star>
              </InputName>
              <InputField
                type="number"
                placeholder="7007409205"
                // onChange={(e) => setphone(e.target.value)}
              ></InputField>
            </Input>
          </Info>
          <InputSeperate>
            <InputName>
              Password <Star>*</Star>
            </InputName>
            <InputField
              type="text"
              placeholder="abrakadabra"
              onChange={(e) => setpass(e.target.value)}
            ></InputField>
          </InputSeperate>
          <InputSeperate>
            <InputName>
              Re-enter Password <Star>*</Star>
            </InputName>
            <InputField
              type="password"
              placeholder="************"
              // onChange={(e) => setrepass(e.target.value)}
            ></InputField>
          </InputSeperate>
          <CheckboxContainer>
            <CheckboxField type="checkbox"></CheckboxField>
            <CheckboxText>Show Password</CheckboxText>
          </CheckboxContainer>

          <Wrap>
            <SignupButton onClick={onCreateuser}>Sign Up</SignupButton>
            <SignupText>
              Already on Skilzen ? Go to{" "}
              <Link href="/signin">
                <Pink>Sign In</Pink>
              </Link>
            </SignupText>
          </Wrap>
        </RightDiv>
        <Cross src="/cross.svg" />
      </MiniContainer>
    </Container>
  );
}

export default Signup;
