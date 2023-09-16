import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { getRandomColor } from "../../helpers/randomColor";

export const HeaderContainer = styled.header`
  padding: 10px;
  border-bottom: 1px solid #121417;
`;

export const Navigation = styled.nav``;

export const Item = styled.li``;

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${getRandomColor};
  }
`;
