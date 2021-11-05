import styled from "styled-components";

export const Button = styled.button`
  padding: 17px 35px;
  border-radius: 6px;
  border: 1px solid #f26a7e;
  font-weight: 500;
  font-size: 16px;
  margin-top: 4rem;
  cursor: pointer;
  background-color: #fff;
  margin-bottom: 1em;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    background-color: #f26a7e;
    color: white;
  }
`;
