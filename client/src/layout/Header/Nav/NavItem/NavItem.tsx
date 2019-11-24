import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { clrAccent3, transition } from "utilities";

interface Props {
  name: string;
  link: string;
}

const NavItem: React.FC<Props> = ({ name, link }) => (
  <Item>
    <Link exact={link === "/"} to={link}>
      {name}
    </Link>
  </Item>
);

export default NavItem;

const Item = styled.li``;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  ${transition({ prop: "color" })};

  &:hover,
  &.active {
    color: ${clrAccent3};
  }
`;
