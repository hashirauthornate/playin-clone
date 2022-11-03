import styled from "styled-components";
import medal from "../assets/medal.svg";
const CardWrapper = styled.div`
  width: 700px;
  height: 142px;
  border: 1px solid white;
  padding-left: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;
import React from "react";
import Image from "next/image";
import { H4, P1 } from "./Typography";
import { Col, Stack } from "react-bootstrap";

type Props = {};

const Card = (props: Props) => {
  return (
    <CardWrapper>
      <Stack direction="horizontal" gap={5}>
        <Image src={medal} alt="medal" />
        <P1>
          You must reach the Daily PLEX Rewards Target. Win or Lose, PLEX is
          earned.
        </P1>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
