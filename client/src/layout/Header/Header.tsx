import React from "react";
import styled from "styled-components";

interface Props {}

const Header: React.FC<Props> = () => (
  <Wrapper>
    <h1>Gateway Smash</h1>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header``;
