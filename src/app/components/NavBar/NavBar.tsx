import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../Logo/Logo";
import { NavItems } from "./NavItems";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
        sm:w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg: pl-12
        lg: pr-12
        justify-between
    `};
`;

const LogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
}
