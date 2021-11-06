import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-self: center;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme?.colors?.default};
    align-self: center;
    opacity: 0.06;
  }
`;
