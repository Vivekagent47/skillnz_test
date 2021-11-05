import React from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "../navbar/Navbar";
import Hero from "./parts/Hero";
import Section from "./parts/Section";
import Categories from "./parts/categories";
import Locations from "./parts/locations";
import Contactus from "./parts/Contactus";
import AboutUs from "./parts/AboutUs";
import { Container } from "./parts/styles/Container.styled";
import Founder from "./parts/Founder";
import { Foundercontainer } from "./parts/styles/Foundercontainer.styled";
import Topcomp from "./parts/Topcomp";

// import AboutUs from "./parts/AboutUs";
// import { Container } from "./parts/styles/Container.styled";
// import Founder from "./parts/Founder";
// import { Foundercontainer } from "./parts/styles/Foundercontainer.styled";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Locations />
      <AboutUs />
      <Section />
      {/* <Topcomp/> */}
      <Founder />
    </>
  );
}

export default Home;
