import styled from "styled-components";

export const Container = styled.button`
position: relative;
    transform: skewX(-10deg);
    text-transform: uppercase;
    padding: 1rem 2rem;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
    border: solid 1px ${({ theme }) => theme?.colors?.main};
    color: ${({ theme }) => theme?.colors?.default};
    overflow: hidden;
    white-space: nowrap;

    &:hover{
        &::before{
            left: 0;
        }
    }

    &::before{
        content: '';
        position: absolute;
        left: -100%;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: ${({ theme }) => theme?.colors?.main};
        z-index: -1;
        transition: left .7s;
    }
`