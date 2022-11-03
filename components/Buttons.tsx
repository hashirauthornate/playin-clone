import styled from "styled-components";

export const StartButton = styled.div`
  width: 170px;
  height: 50px;
  transform: skew(-20deg);
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: "Nekst-Light", sans-serif;
  font-style: italic;
  font-weight: 800;
  transition: background-color 0.3s ease 0s;
  &:hover {
    background-color: transparent;
    color: white;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-left: 1px groove;
    border-right: 1px groove;
    border-color: ${(props) => props.theme.colors.main};
  }
`;
