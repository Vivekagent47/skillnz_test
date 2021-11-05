import styled from "styled-components";

export const SearchButton = styled.div`
    cursor: pointer;
    text-align: center;
    background-color: #404366;
    color: #fff;
    font-size: 16px;
    width: 30%;
    border: none;
    padding: 13px 38px;
    border-radius: 4px;
    &:hover {
    background-color: #404355;
    transition: all 0.3s ease;
    }
    @media (max-width: 783px) {
    margin-right: 0;
    font-size: 14px;
    padding: 14px 30px;
    }
`