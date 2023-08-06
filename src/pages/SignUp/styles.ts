import styled from "styled-components";

export const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0C134F;

`;

export const Content = styled.div`
  height: 25rem;
  width: 30rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1rem;
  background-color: #ffffff;  
`;

export const Title = styled.h1`
  color: #0C134F;
  font-size: 2.4rem;
  font-weight: 550;
`;

export const Text = styled.h3`
  color: #0C134F ;
  font-size: 1rem;
  cursor: pointer;
`;

export const NavigateText = styled.span`
  color: #5C469C;
  text-decoration: underline;
`;