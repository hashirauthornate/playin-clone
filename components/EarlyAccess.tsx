import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { SubmitButton } from "./Buttons";
const Title = styled.div`
  font-size: 40px;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  text-transform: uppercase;
`;
const Text = styled.div`
  font-size: 25px;
  font-family: "Nekst-Light", sans-serif;
  color: ${(props) => props.theme.colors.grey};
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 400px;
`;
const Input = styled.input`
  -webkit-appearance: none;
  border: 1px solid white;
  height: 55px;
  background-color: transparent;
  outline: none;
  color: white;
  padding: 20px;
  width: 100%;
`;
const Flex = styled.div`
  display: flex;
`;
const Small = styled.span`
  font-size: 15px;
  text-align: center;
  margin: 10px 0;
  color: ${(props) => props.theme.colors.grey};
`;
type Props = {};

const EarlyAccess = (props: Props) => {
  return (
    <div>
      <Title>playin early</Title>
      <Title>access cards</Title>
      <br />
      <Text>
        The PlayIn Access Card is the beginning of the PlayIn journey. There are
        5 tiers,
        <br /> each with their own set of reward incentives. Be the first to
        know when we release.
      </Text>
      <br />
      <Form>
        <Input placeholder="Your Email Address" />
        <br />
        <Row>
          <Col lg={8}>
            <Input placeholder="Referral Code" />
          </Col>
          <Col lg={4}>
            <SubmitButton> Submit</SubmitButton>
          </Col>
          <Small>
            If you have already signed up then enter your email again to see
            your standing in waitlist
          </Small>
        </Row>
      </Form>
    </div>
  );
};

export default EarlyAccess;
