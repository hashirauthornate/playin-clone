import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
const LayoutWrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
`;
type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
