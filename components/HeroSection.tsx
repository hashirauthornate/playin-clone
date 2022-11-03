import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { H1, H5 } from "./Typography";
const HeroWrapper = styled.div`
  height: 600px;
  margin-left: 60px;
  border-left: 1px solid white;
  padding-left: 60px;
  display: flex;
  align-items: center;
`;

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <HeroWrapper>
      <Row>
        <Col>
          <H1>A NEW APPROACH TO</H1>
          <H1>SPORTS GAMING</H1>
          <br />
          <H5>Peer2Peer Sports Betting Meets Play2Earn Gaming</H5>
          <H5>Earn All The Time. Every Time.</H5>
        </Col>
      </Row>
    </HeroWrapper>
  );
};

export default HeroSection;
