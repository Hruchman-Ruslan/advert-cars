import styled from "@emotion/styled";
import { getRandomColor } from "../../helpers/randomColor";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: normal;
`;

export const Title = styled.h1`
  text-align: center;
  color: brown;
  margin-bottom: 50px;
  font-weight: 900;
  font-size: 32px;
`;

export const List = styled.ul`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 35px;

  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export const Item = styled.li`
  text-align: right;

  &:nth-of-type(odd) {
    text-align: left;
  }
`;

export const Text = styled.p`
  color: #121417;
  font-size: 24px;
  font-weight: 600;
  line-height: calc(20 / 24);

  color: ${getRandomColor};
`;
