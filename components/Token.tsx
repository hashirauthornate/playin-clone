import React from "react";
import styled from "styled-components";
import { P3, Text, Text2, Text2Left } from "./Typography";
import crystal from "../assets/money-stack.svg";
import { Col } from "react-bootstrap";
import Image from "next/image";
const Flex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px 220px;
`;

type Props = {};

const Token = (props: Props) => {
  return (
    <Flex>
      <Col>
        <Text2Left>PLEX XP</Text2Left>
        <P3 direction="right">
          The game rewards token. Use it to <br />
          level up your PlayIn Badge & <br /> Collectibles.
        </P3>
      </Col>
      <Col>
        <Image src={crystal} alt="crystal" width={400} />
      </Col>
    </Flex>
  );
};

export default Token;
