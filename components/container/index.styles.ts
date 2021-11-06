import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  position: relative;
  background-color: red;
  height: 100vh;
  width: 100vw;

  &::before {
    content: "";
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme?.colors?.opacity};
    transition: all 0.5s;
    z-index: 1;
  }
`;
export const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;
export const Loader = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);
  height: 100vh;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
`;

const aniSpiderman = keyframes`
    0% {
    stroke-width: 0;
    stroke-dasharray: 1 150;
    fill: transparent;
}
25% {
    stroke-width: 1;
    fill: transparent;
    stroke-dasharray: 150 0;
}
60%{
    stroke-width: 0.4;
    fill: #e5e9ef;
}
100% {
    stroke-width: 0.4;
    fill: #e5e9ef;
}
`;

export const Svg = styled.svg`
  max-width: 144px;

  & .anim-spiderman {
    fill: transparent;
    animation: ${aniSpiderman} 7s ease infinite alternate;
  }
`;
