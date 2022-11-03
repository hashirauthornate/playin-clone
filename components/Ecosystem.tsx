import React from "react";
import styled from "styled-components";
import { H1 } from "./Typography";
import { Row, Col } from "react-bootstrap";
import { BiPlus } from "react-icons/bi";
import gif from "../assets/playin-gold-spinning.gif";
import Image from "next/image";
const Wrapper = styled.div`
  height: 550px;
  margin-left: 60px;
  margin-bottom: 300px;
`;
const AccordianWrapper = styled("div")<{ height: number }>`
  height: ${(props) => props.height}px;
  border: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 30px 0;
`;
const AccordianTitle = styled.div`
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 500;

  margin: 0px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
type Props = {};

const Ecosystem = (props: Props) => {
  return (
    <Wrapper>
      <Row>
        <H1>PLAYIN ECOSYSTEM</H1>
      </Row>
      <br />
      <Flex>
        <Col lg={5}>
          <AccordianWrapper height={100}>
            <div>
              <AccordianTitle>PLAY2EARN WITH</AccordianTitle>
              <AccordianTitle>COLLECTIBLES</AccordianTitle>
            </div>

            <BiPlus size={40} color="white" />
          </AccordianWrapper>
          <AccordianWrapper height={100}>
            <div>
              <AccordianTitle>PLAY2EARN WITH</AccordianTitle>
              <AccordianTitle>COLLECTIBLES</AccordianTitle>
            </div>

            <BiPlus size={40} color="white" />
          </AccordianWrapper>
          <AccordianWrapper height={100}>
            <div>
              <AccordianTitle>PLAY2EARN WITH</AccordianTitle>
              <AccordianTitle>COLLECTIBLES</AccordianTitle>
            </div>

            <BiPlus size={40} color="white" />
          </AccordianWrapper>
          <AccordianWrapper height={100}>
            <div>
              <AccordianTitle>PLAY2EARN WITH</AccordianTitle>
              <AccordianTitle>COLLECTIBLES</AccordianTitle>
            </div>

            <BiPlus size={40} color="white" />
          </AccordianWrapper>
        </Col>
        <Col>
          <Image src={gif} alt="gif" width={700} />
        </Col>
      </Flex>
    </Wrapper>
  );
};

export default Ecosystem;
