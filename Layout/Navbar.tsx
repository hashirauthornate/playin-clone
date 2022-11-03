import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logo from "../assets/playin-logo.png";
import { Stack } from "react-bootstrap";
import { StartButton } from "../components/Buttons";
const NavbarWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.dark};
  height: 80px;
  padding: 20px 30px;
  color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;
const NavLinkWraper = styled.div`
  display: flex;
  align-items: center;
`;
const NavLink = styled.div`
  font-family: "Nekst-Light", sans-serif;
  font-weight: 900;
  margin: 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
`;
type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Image src={logo} alt="logo" />
      <NavLinkWraper>
        <NavLink>Main</NavLink>
        <NavLink>How to Play 2 Earn</NavLink>
        <NavLink>Roadmap</NavLink>
        <NavLink>Our Worth</NavLink>
        <NavLink>About us</NavLink>
      </NavLinkWraper>
      <StartButton>Get Started</StartButton>
    </NavbarWrapper>
  );
};

export default Navbar;
