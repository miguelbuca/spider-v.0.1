import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    background-color: red;
    height: 100vh;
    width: 100vw;

    &::before{
        content: '';
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: ${({ theme }) => theme?.colors?.opacity};
        transition: all .5s;
        z-index: 1;
    }
`
export const Content = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
`