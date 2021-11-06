import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container";
import Marvel from "../components/helper/marvel";
import PlayStation from "../components/helper/playstation";
import Button from "../components/layout/button";
import Header from "../components/layout/header";
import { Main } from "../util/index.styles";

import { UseTheme } from '../components/context/theme'
import {  ThemeProvider ,createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  html,
  body{
    overflow: hidden !important;
    font-family: sans-serif;
  }
`

const Home: NextPage = () => {

  const { theme } = UseTheme();

  return (
    <div>
      <Head>
        <title>Spider Man | UI </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container video="bg.mp4">
          <Header />
        <Main>
          <div>
            <div>
              <img src="/spider-man-text.png" alt="spider-map" />
            </div>
            <div>
              <small>
                Spider-Man: Miles Morales is an action-adventure video game
                developed by Insomniac Games and published by Sony Interactive
                Entertainment for the PlayStation 4 and PlayStation 5.
              </small>
              <div>
                <div>
                  <span>
                    <PlayStation width={26} height={26} />
                  </span>
                  <span>
                    <Marvel width={62} height={18} />
                  </span>
                </div>
                <div>
                  <Button>
                    <i className="fi fi-rr-Play-alt">Watch the teaser</i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/spider-man.png" alt="spider-map" />
          </div>
        </Main>
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default Home;
