import React from "react";
import styled from "styled-components";

import { Container } from "../Container";

interface Props {}

const Footer: React.FC<Props> = () => (
  <Wrapper>
    <Container>
      <p>
        &copy; 2019
        <br />
        Zach Murphy &amp; Nich Secord
      </p>
    </Container>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.footer`
  margin-top: auto;
  text-align: center;
  font-style: italic;
`;
