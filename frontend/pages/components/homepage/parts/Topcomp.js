import React from "react";
import Image from "next/image";
import paypal from "../icons/paypa.svg"
import mc from "../icons/mc.svg"
import sf from "../icons/sf.svg"
import blu from "../icons/blu.svg"
import slack from "../icons/slack.svg"
import gm from "../icons/gm.svg"
import db from "../icons/db.svg"
import { Container } from "./styles/CommonComponents/Container.styled";
import { Homepagepurple, Topcomptext,Redfont,Belowred,Joinbut,Paypal1,Paypal2,Mc1,Mc2,Sf1,Sf2,Blu,Slack,Greenmonke,Db,Fade } from "./styles/TopComp.styled";

const Topcomp = () => {
  return (
    <Container>
    <Homepagepurple>
          <Topcomptext className="normal">Top Companies <br/> Hiring</Topcomptext>

            <Redfont>Get internships in 
renowned companies </Redfont>

        <Belowred>Choose HiringBird for your
        next internship opportunity</Belowred>
       
        <Paypal1><Image src={paypal}></Image></Paypal1>
        <Paypal2><Image src={paypal}></Image></Paypal2>
        
        <Mc1><Image src={mc}></Image></Mc1>
        <Mc2><Image src={mc}></Image></Mc2>
        <Sf1><Image src={sf}></Image></Sf1>
        <Sf2><Image src={sf}></Image></Sf2>
        <Blu><Image src={blu}></Image></Blu>
        <Slack><Image src={slack}></Image></Slack>
        <Greenmonke><Image src={gm}></Image></Greenmonke>
        <Db><Image src={db}></Image></Db>
        <Fade></Fade>
        <Joinbut>Join Skilzen</Joinbut>
          </Homepagepurple>
         
      
  </Container>
  )
}

export default Topcomp
