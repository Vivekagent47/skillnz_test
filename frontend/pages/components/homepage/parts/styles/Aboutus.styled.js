import styled from "styled-components";

export const Aboutuscard = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #fff;

div {
    width:100%
}

img {
    width : 447px;
    height : 480px
  }

h2 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    width : 220px;
    border-bottom : #F26A7E solid 5px;
    // line-height: 98px;
    
    /* identical to box height, or 245% */
    font-feature-settings: 'salt' on, 'liga' off;
    
    color: #404366;
}


p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    width: 600px;

    /* or 160% */
    font-feature-settings: 'salt' on, 'liga' off;

    color: #18191F;
}


@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width : 100%;
    margin-left: 100px;
    img {
        width : 400px;
        height : 420px;
        margin-left: 100px;
        margin-top: 30px;
    }
`