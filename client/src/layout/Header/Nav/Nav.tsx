import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

interface Props {}

const Nav: React.FC<Props> = () => {
  // home, rules, leaderboard, missions, register
  const items: { name: string; link: string }[] = [
    {
      name: "home",
      link: "/"
    },
    {
      name: "rules",
      link: "/rules"
    },
    {
      name: "leaderboard",
      link: "/leaderboard"
    },
    {
      name: "missions",
      link: "/missions"
    },
    {
      name: "register",
      link: "/register"
    }
  ];
  return (
    <Wrapper>
      <List>
        {items.map(item => (
          <NavItem {...item} />
        ))}
      </List>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  width: 100%;

  @media screen and (min-width: 992px) {
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
