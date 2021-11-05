import styled from "styled-components";

export const Container = styled.div`
  margin-left: 4.16%;
  margin-right: 4.16%;
  height: 77px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img``;

export const Menu = styled.img`
  display: none;
  @media (max-width: 783px) {
    display: block;
    cursor: pointer;
    transition: all 0.2s;
  }
`;

export const Links = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 783px) {
    flex-direction: column;
    padding: 10px 0;
    width: 100%;
    height: 300px;
    position: absolute;
    right: 0;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #e5e5e5;
  }
`;

export const StyledLink = styled.a`
  color: #404366;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 783px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid #4b59f7;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #f26a7e;
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 26px;
  border-radius: 2px;
  &:hover {
    background-color: #fc5b73;
    transition: all 0.3s ease;
  }
  @media (max-width: 783px) {
    margin-top: 20px;
    margin-bottom: 25px;
    margin-left: 20px;
    padding: 12px 64px;
    ${"" /* width: 80%;  */}
  }
`;

export const ImageContainer = styled.div`
  margin-bottom: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Avatar = styled.img`
  border-radius: 99px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
`;
