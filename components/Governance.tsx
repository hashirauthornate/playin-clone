import React from "react";
import styled from "styled-components";
import { P3, Text, Text2, Text2Left } from "./Typography";
import money from "../assets/money-stack.svg";
import { Col } from "react-bootstrap";
import Image from "next/image";
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 220px;
`;
type Props = {};

const Governance = (props: Props) => {
  return (
    <Flex>
      <Col>
        <Text>$BETR</Text>
        <Text>GOVERNANCE</Text>
        <Text>TOKEN</Text>
      </Col>
      <Col>
        <P3 direction="right">The $BETR token grants holders</P3>
        <P3 direction="right">votes in governing the underlying</P3>
        <P3 direction="right">Play-2-Earn ecosystem</P3>
      </Col>
    </Flex>
  );
};

export default Governance;
