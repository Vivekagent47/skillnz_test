import styled from "styled-components";

export const TextField = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 0;
  color: #404366;
  font-size: 16px;
  font-weight: 400;
  &::placeholder {
    color: #c9cbe2;
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 783px) {
    &::placeholder {
      font-size: 13px;
    }
  }
`;