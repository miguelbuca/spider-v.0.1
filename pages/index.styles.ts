import styled from "styled-components";

export const Main = styled.section`
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0 ${({ theme }) => theme?.padding?.default};

    &>div{
        display: flex;
        flex: 1;

        &:first-child{
            display: flex;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
            
            &>div{
                display: flex;
                align-items: center;

                &:first-child img{
                    width: 18rem;
                }
                &:last-child{
                    display: flex;
                    flex-direction: column;
                    
                    & small{
                        color: ${({ theme }) => theme?.colors?.default};
                        margin: 1.5rem 0;
                        opacity: .5;
                        transition: all .4s;
                    }

                    &>div{
                        display: flex;
                        flex-direction: row;

                        &>div:first-child{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            margin-right: 1rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }

        &:last-child{
            justify-content: center;
            align-items: center;
            flex: 6;

            & img{
                max-width: 100%;
            }
        }
    }
`