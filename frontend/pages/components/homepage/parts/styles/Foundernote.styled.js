import styled from "styled-components";

export const Foundernote = styled.div`
display: flex;
justify-content: center;
background-color: #C9CBE2;
div {
    width: 100%;
    background-color: #C9CBE2;
}

h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    width : 400px;
    /* identical to box height, or 245% */
    font-feature-settings: 'salt' on, 'liga' off;
    
    color: #404366;
}

p {

    width: 640px;
    margin-left: 20px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    padding-right: 60px;

    /* or 133% */
    font-feature-settings: 'salt' on, 'liga' off;

    color: #404366;
}

img {
    width: 300px;
    height: 428px;
    border-radius: 19px;
}

span {
    color: #F26A7E;
    font-size: 120px;
    font-weight: bold;
    opacity: 0.5
}

.maintext {
    display: flex;
}

.fullname{
    color: #F26A7E;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px
}

.ceo{
    font-size: small;
    margin: none;
    line-height: 0
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    align-items: center;
    background-color: #C9CBE28A;
    width: device-width;
    img{
        margin-left: 27%;
    }
    h1{
        margin-left:24%;
        margin-bottom: 30px
    }
p{
    margin-right: 60px;
    margin-top: 30px;
}
}
`

export const Team = styled.div`
.team{
    margin-top: 20px;
    display: flex;
    margin-left:100px;
}

.teamimg{
    height:100px;
    width:100px;
    border-radius:50%;
    margin-left: 60px;
}

h4{
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 21.2442px;
    color: #404366;
}

@media (max-width: ${({ theme }) => theme.mobile}) {
    .team {
        margin-left: 0px;
        margin-right: 40px;
        background-color: #C9CBE2;
    }
}
`