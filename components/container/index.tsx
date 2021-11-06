import React, { FC } from "react";
import { Content, Main } from "./index.styles";
import Props from "./types";

const Container: FC<Props> = ({ video, children }) => {
  return (
    <Main>
      {video && (
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      )}
      {children && <Content>{children}</Content>}
    </Main>
  );
};

export default Container;
