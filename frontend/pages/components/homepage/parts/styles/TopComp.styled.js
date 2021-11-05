import styled from "styled-components";

 const Homepagepurple = styled.div`


    /* Black BG */
  
  position: absolute;
  width: 100%;
  
  left: 0px;
  top: 6618px;
  right: 0px;
  
  background: #C9CBE2;
  
  
  
      height: 80vh;
  

  @media (max-width: 700px) {
     
        margin-left: 10px;
        padding-right: 2000px;
        
      
  }

  @media (min-width: 621px) and (max-width: 1679px){
   
        
    margin-left: -30px;
    padding-right: 220vh;
    padding-bottom: 600px;
    height:92vh;
 
}
  @media  screen and (max-width: 620px){
      
    height: 280vh;
    background: white;
    
  }
 
`;
const Topcomptext = styled.h1`
width: 1005px;
  height: 98px;
  margin-left: 202px;
  padding-top: 60px;
  transform: scale(1.1);
  font-family: Inter;
  font-style: normal;
  font-weight: 800px;
  font-size: 60px;
  line-height: 98px;
  /* identical to box height, or 136% */
  
  font-feature-settings: 'salt' on, 'liga' off;
  color: #090d33;


  @media  screen and  (max-width: 620px) {
 
      line-height:-30px;
      transform: scale(2.3);
      margin-left: 120vh;
    margin-top: 10vh;
    
font-feature-settings: 'salt' on, 'liga' of

}
`;

const Redfont = styled.h2`

position: static;
width: 445px;
height: 82px;
margin-left: 20vh;
padding-top: 23vh;

font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 41px;
/* or 114% */


color: #F26A7E;

@media (max-width: 1030px){
  margin-left: 23vh;
}
@media (max-width: 620px){
  display:none;
}
@media (min-width: 621px) and (max-width: 1679px){
  padding-top: 30vh;
  margin-left: 22vh;
}


`;
const Belowred = styled.h3`



/* Description */

position: absolute;
width: 565px;
height: 32px;
left: 162px;
top: 49vh;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 32px;
/* identical to box height, or 160% */
font-feature-settings: 'salt' on, 'liga' off;

color: #404366;

@media  screen and (max-width:620px){
    /* Description */
transform:scale(3.4);
position: absolute;
width: 266px;
height: 46px;
left: 85vh;
top: 304vh;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 23px;
/* or 128% */
text-align: center;
font-feature-settings: 'salt' on, 'liga' off;

color: #404366;


}

@media (min-width: 621px) and (max-width: 1679px){
  padding-top: 10vh;
  margin-left: -2vh;
}
@media(max-width: 320px){
  margin-top: 30vh;
}

`;

const Joinbut = styled.button`


display: flex;
flex-direction: row;
align-items: flex-start;
padding: 17px 35px;

position: absolute;
width: 161px;
height: 53px;
left: 169px;
top: 523px;
border-style: none;
background: #F26A7E;
border-radius: 6px;
font-family: Inter;
color: white;
cursor: pointer;
@media  (max-width:620px){
    /* button/big/hover */
transform:scale(3.3);

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 17px 35px;

position: absolute;
width: 161px;
height: 53px;
left: 88vh;
top: 345vh;
border-style: none;
background: #F26A7E;
border-radius: 6px;
font-family: Inter;
color: white;



}


@media(max-width: 320px){
  margin-top: 30vh;
}

`;
const Paypal1 =styled.div`

/* Logo 5 */


width: 159.57px;
height: 159.57px;
margin-left: 125vh;
top: 10.79px;
margin-top: -9vh;
padding-top:10px;


position:static;

@media  (max-width: 620px) {
    transform: scale(3);
    margin-left: 55vh;
  margin-top: 100vh;
  padding-top:19px;

}
/* Inside Auto Layout */
@media(max-width: 320px){
  padding-top:10vh;
 
}


`;
const Paypal2 = styled.div`

/* Logo 5 */


width: 159.57px;
height: 159.57px;
margin-left: 128vh;
margin-top: 43.79px;
padding-top: 35px;
position:static;
@media  screen and (max-width: 620px) {
    transform: scale(2.8);
    margin-left: 54vh;
  margin-top: -2vh;
  padding-top:37vh;
}

/* Inside Auto Layout */
@media(max-width: 320px){
  margin-top:20vh;
 
}

@media (min-width: 621px) and (max-width: 1679px){
  padding-top: 6vh;
}
`;
const Mc1 = styled.div`
/* Logo 6 */

margin-left: 145vh;

width: 159.57px;
height: 159.57px;

margin-top: -355px;


filter: drop-shadow(0px 9.30838px 18.6168px rgba(41, 41, 42, 0.07));

@media   (max-width: 620px) {
    transform: scale(3);
    margin-left: 123vh;
  margin-top: -50vh;
}
/* Inside Auto Layout */
@media (min-width: 621px) and (max-width: 1679px){
  margin-left: 145vh;
}
`;

const Mc2 = styled.div`


top: 10.79px;
position: static;
width: 159.57px;
height: 159.57px;
margin-left: 1200px;
margin-top: 55px;
padding-top:20px;
position:static;
@media  (max-width: 620px) {
    transform: scale(3);
    margin-left: 120vh;
  margin-top: -2vh;
  padding-top:30vh;
}
filter: drop-shadow(0px 9.30838px 18.6168px rgba(41, 41, 42, 0.07));
@media (min-width: 621px ) and (max-width: 1679px){
  margin-left: 150vh;
  padding-top: 4vh;
}

`;

const Sf1 = styled.div`
/* Logo 7 */

top: 10.79px;
position: static;
width: 159.57px;
height: 159.57px;
margin-left: 165vh;
margin-top: -370px;

position:static;

filter: drop-shadow(0px 9.30838px 18.6168px rgba(41, 41, 42, 0.07));

/* Inside Auto Layout */
@media   (max-width: 620px) {
    transform: scale(3);
    margin-left: 180vh;
  margin-top: -54vh;
  padding-top:9px;
}


`;
 const Sf2 = styled.div`
 
 top: 10.79px;
position: static;
width: 159.57px;
height: 159.57px;
margin-left: 1370px;
margin-top: 55px;
padding-top:20px;
position:static;
@media (max-width: 620px) {
    transform: scale(3);
    margin-left: 180vh;
  margin-top: -2vh;
  padding-top:33vh;
}
@media (max-width:1320px){
  margin-left: 170vh;
}
 `;
const Blu = styled.div`


width: 159.57px;
height: 159.57px;
margin-left: 120vh;
margin-top: -33vh;

@media  (max-width: 620px) {
    transform: scale(3);
    margin-left: 25vh;
  margin-top: -10vh;
  padding-top:73px;
}
@media (max-width:1330px){
  margin-top: -40vh;
  position:static;
}


`;
 const Slack = styled.div`
 
 width: 159.57px;
height: 159.57px;
margin-left: 139vh;
margin-top: -20vh;


@media    (max-width: 620px) {
    transform: scale(3);
    margin-left: 85vh;
  margin-top: -17vh;
  padding-top:64px;
}
@media (max-width:1330px){
  margin-top: -24vh;
}



 `;
  const Greenmonke = styled.div`
  position:static;
  width: 159.57px;
  height: 159.57px;
  margin-left: 160vh;
  margin-top:-20vh;
  top: -10.79px;
  @media  screen and (max-width: 620px) {
    transform: scale(3);
    margin-left: 145vh;
  margin-top: -19vh;
  padding-top:65px;
}

@media (max-width:1330px){
  margin-top: -23vh;
}
  
  `;
  const Db = styled.div`
  position:static;
  width: 159.57px;
  height: 159.57px;
  margin-left: 179vh;
  margin-top: -20vh;
  top: -10.79px;
  @media  (max-width: 620px) {
    transform: scale(3.0);
    margin-left: 200vh;
  margin-top: -35vh;
  padding-top:70px;
}
@media (max-width:1330px){
  margin-top: -24vh;
}

  `;
  const Fade = styled.div`
  
  /* Rectangle 1590 */
@media   (max-width:620px){
position: absolute;
width: 1948px;
height: 775px;
left: 14px;
top: 1067px;

background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 88.48%);
}
  
  `;


export {Homepagepurple,Topcomptext,Redfont,Belowred,Joinbut,Paypal1,Paypal2,Mc1,Mc2,Sf1,Sf2,Blu,Slack,Greenmonke,Db,Fade}
