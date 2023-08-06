import styled from "styled-components";

export const Form = styled.form`
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.3rem;
  opacity: 100%;
`;

export const Input = styled.input`
  height: 12%;
  width: 80%;
  border: 0.15rem solid #1D267D;
  border-radius: 0.5rem;
  outline: none;
  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  height: 15%;
  width: 80%;
  background-color: #FFFFFF;
  cursor: pointer;
  color: #FFFFFF;
  border-radius: 0.5rem #1D267D;
  color: #1D267D;
  border: 0.15rem solid ;
  border-radius: 0.7rem;
  font-size: 1.1rem;
  font-weight: 700;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #1D267D;
    color: #FFFFFF;
    border: none;
  }
`;
