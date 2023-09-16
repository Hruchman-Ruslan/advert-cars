import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  row-gap: 50px;
  column-gap: 30px;
  justify-items: center;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
