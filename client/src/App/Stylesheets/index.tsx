import React from "react";
import Normalize from "react-normalize";

import { GlobalStyle } from "./GlobalStyle";

interface Props {}

const index: React.FC<Props> = () => (
  <>
    <Normalize />
    <GlobalStyle />
  </>
);

export default index;
