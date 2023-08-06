import styled from "styled-components";

export const Container = styled.div`
  height: 12%;
  width: 80%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: 0.15rem solid #1D267D;
  outline: none;
  line-height: 1.6;
  box-sizing: border-box;
  padding: 0 1rem 0 1rem;
  border-radius: 0.4rem;
  font-size: 1rem;
`;

export const Icon = styled.i`
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 5%;
`;
