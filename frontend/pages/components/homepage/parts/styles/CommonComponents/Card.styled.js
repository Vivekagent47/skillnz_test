import styled from "styled-components";

export const Card = styled.div`
background-color: #fff;
border: 1px solid lightgray;
padding: 15px;
text-align: center;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
img {
  object-fit: contain;
  max-height: 240px;
}
h3 {
  font-weight: 600;
  font-size: 24px;
}
`