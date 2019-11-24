import React from "react";
import styled from "styled-components";

import { spacing } from "utilities";
import { Container } from "../Container";
import Nav from "./Nav";

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Logo>Gateway Smash</Logo>

    <Nav />
  </Wrapper>
);

export default Header;

const Wrapper = styled(Container).attrs({ as: "header" })`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  align-items: center;
  width: 100%;
  grid-gap: ${spacing.md};
  margin-bottom: ${spacing.lg};

  @media screen and (min-width: 992px) {
    grid-template-rows: initial;
    grid-template-columns: 1fr 2fr;
  }
`;

const Logo = styled.h1`
  margin: 0;
  text-align: center;

  @media screen and (min-width: 992px) {
    justify-self: flex-start;
  }
`;
