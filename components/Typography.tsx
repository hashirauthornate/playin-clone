import styled from "styled-components";

export const Text = styled.h1`
  font-size: 40px;
  color: white;
`;
export const Text2 = styled.h1`
  color: white;
  margin: 20px 0;
`;
export const Text2Left = styled.h1`
  color: white;
  margin: 20px 0;
  text-align: right;
`;
export const H1 = styled.div`
  font-size: 90px;
  font-family: "Raleway", sans-serif;
  color: white;
  font-weight: 500;
`;
export const H2 = styled.div``;
export const H4 = styled.h4`
  font-size: 20px;
  font-family: "Nekst-Light", sans-serif;
  color: white;
`;
export const H5 = styled.h5`
  font-size: 20px;
  font-family: "Nekst-Light", sans-serif;
  color: ${(props) => props.theme.colors.grey};
  text-align: center;
`;

export const H6 = styled.h6`
  font-size: 12px;
  font-family: "Nekst-Light", sans-serif;
  color: ${(props) => props.theme.colors.grey};
`;

export const P1 = styled.p`
  font-size: 22px;
  font-family: "Nekst-Light", sans-serif;
  color: white;
  min-width: 250px;
  max-width: 300px;
`;
export const P2 = styled.p`
  font-size: 20px;
  font-family: "Nekst-Light", sans-serif;
  color: ${(props) => props.theme.colors.grey};
`;
export const P3 = styled("p")<{ direction?: string }>`
  font-size: 20px;
  font-family: "Nekst-Light", sans-serif;
  color: ${(props) => props.theme.colors.grey};
  text-align: ${(props) => props.direction};
  margin: 0;
`;
