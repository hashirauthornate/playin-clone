import Image from "next/image";
import React from "react";
import styled from "styled-components";
import logo from "../assets/playin-logo.png";
import { Stack } from "react-bootstrap";
import { IconContext } from "react-icons";
import { SiTwitter, SiLinkedin } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

import { H6 } from "../components/Typography";
import { Row, Col } from "react-bootstrap";
const FooterWrapper = styled.div`
  padding: 15px;
  height: 400px;
  & > hr {
    border-color: ${(props) => props.theme.colors.grey};
  }
`;
const Center = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BottmWrapper = styled.div`
  padding-top: 90px;
`;
const Flex = styled.div`
  display: flex;
`;
type Props = {};

const Footer = (props: Props) => {
  return (
    <FooterWrapper>
      <hr />
      <Center>
        <Image src={logo} alt="logo" />
        <Center>
          <Stack direction="horizontal" gap={5}>
            <IconContext.Provider value={{ color: "4BECA3", size: "25px" }}>
              <SiTwitter />
              <SiLinkedin />
              <BsDiscord />
            </IconContext.Provider>
          </Stack>
        </Center>
      </Center>
      <BottmWrapper>
        <Row>
          <Col lg={5}>
            <H6>Security</H6>
            <br />
            <H6>Privacy Policy</H6>
          </Col>
          <Col lg={5}>
            <Flex>
              <FaEnvelope size={20} color="4BECA3" />
              <H6>hello@playintechnologies.com</H6>
            </Flex>
          </Col>
          <Col>
            <H6>PlayIn, Inc. 2013 - 2022.</H6>
            <H6>All Rights Reserved</H6>
          </Col>
        </Row>
      </BottmWrapper>
    </FooterWrapper>
  );
};

export default Footer;
