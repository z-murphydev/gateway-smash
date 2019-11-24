import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { spacing } from "utilities";
import { Container } from "../Container";
import Nav from "./Nav";

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <Container>
      <Logo>
        <Link to="/">Gateway Smash</Link>
      </Logo>

      <Nav />
    </Container>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  margin-bottom: ${spacing.lg};

  ${Container} {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    align-items: center;
    width: 100%;
    grid-gap: ${spacing.md};

    @media screen and (min-width: 992px) {
      grid-template-rows: initial;
      grid-template-columns: 1fr 2fr;
    }
  }
`;

const Logo = styled.h1`
  margin: 0;
  text-align: center;

  @media screen and (min-width: 992px) {
    justify-self: flex-start;
  }

  > a {
    text-decoration: none;
    color: inherit;
  }
`;
