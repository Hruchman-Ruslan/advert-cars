import styled from "@emotion/styled";

export const Button = styled.button`
  display: block;
  margin: auto;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;

  :hover,
  :focus {
    color: #0b44cd;
    filter: drop-shadow(0 0 10px #0b44cd);
    transition: filter 0.5s ease-out;
  }
`;
