import React, { useState, useEffect } from "react";
import Moon from "../../helper/moon";
import Spider from "../../helper/spider";
import Sun from "../../helper/sun";
import Switch from "../switch";
import { Container, Nav } from "./index.styles";

import { UseTheme } from '../../context/theme'
import { iTheme } from "../../context/theme/type";

function Header() {

  const { setTheme, defaultValue } = UseTheme()

  const [state, setState] = useState<boolean>(false);

  useEffect(() => {

    const theme: any = state ? defaultValue : {
      colors: {
        default: '#fff',
        main: '#85b3da',
        opacity: 'rgba(17, 34, 51, 0.8)'
      },
      padding: {
        default: '2rem'
      }
    }

    setTheme(theme);
  }, [state, defaultValue])


  return (
    <Container>
      <div>
        <Spider stroke={state ? '#fff' : 'rgb(234, 29, 34)'} fill={state ? '#fff' : 'rgb(234, 29, 34)'} height={77} width={77} strokeWidth={0.3}  />
      </div>
      <div>
        <div>
          <Nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Story</a>
              </li>
              <li>
                <a href="#">wallpapres</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
            </ul>
          </Nav>
        </div>
        <div>
          <Switch onChange={(state) => setState(state)}>
            {state ? (
              <Moon fill="rgb(234, 29, 34)" width={20} height={20} />
            ) : (
              <Sun fill="#fff" width={20} height={20} />
            )}
          </Switch>
        </div>
      </div>
    </Container>
  );
}

export default Header;
