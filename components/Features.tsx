import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { P1, Text2, Text, P2 } from "./Typography";
import Card from "./Card";

const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 130px;
`;
type Props = {};

const Features = (props: Props) => {
  return (
    <FeaturesWrapper>
      <TextWrapper>
        <Text2>IN GAME XP TO</Text2>
        <Text2>REAL MONEY</Text2>
        <br />
        <P2>
          A simple gameplan:
          <br />
          In-Game XP to Real $$$
        </P2>
      </TextWrapper>
      <TextWrapper>
        <Card />
        <Card />
        <Card />
      </TextWrapper>
    </FeaturesWrapper>
  );
};

export default Features;
