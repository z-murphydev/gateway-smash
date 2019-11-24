import React from "react";
import styled from "styled-components";

import { Container } from "../Container";

interface Props {}

const Footer: React.FC<Props> = () => (
  <Wrapper>
    <p>
      &copy; 2019
      <br />
      Zach Murphy &amp; Nich Secord
    </p>
  </Wrapper>
);

export default Footer;

const Wrapper = styled(Container).attrs({ as: "footer" })`
  margin-top: auto;
  text-align: center;
  font-style: italic;
`;
