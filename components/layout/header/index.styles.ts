import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme?.colors?.default};
  padding: 1.5rem ${({ theme }) => theme?.padding?.default};
  align-items: center;

  & > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: row;

    & > div:first-child {
      flex: 1;
    }
  }
`;
export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style: none;

    & > li {
      position: relative;
      transition: all .4s;

      & a,
      & a:link {
        position: relative;
        color: inherit;
        padding: 0 0.7rem;
        text-transform: uppercase;
        font-size: 0.8rem;
        text-decoration: none;
        opacity: 0.5;
        transition: inherit;

        &:hover {
          opacity: 1;

          &::before{
              top: -40px;
          }
        }

        &::before {
          content: "";
          position: absolute;
          height: 60px;
          width: 2px;
          top: -100px;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: linear-gradient(to top, ${({ theme }) => theme?.colors?.main}, transparent 80%);
          transition: top .8s;
        }
      }
    }
  }
`;
