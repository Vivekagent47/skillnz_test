import styled from 'styled-components'

export const Foundercontainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px 80px;
  background-color: #C9CBE2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    // position: relative;
    // width: 100%;
    max-width: 1000px;
    min-width: 780px;
    left: 0;
    background-color: #C9CBE2;
    margin: 40px 40px;
    border-radius: 15px;
    padding: 40px 80px;
    p {
      margin-right: 50px;
    }
}
`