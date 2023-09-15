import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header``;

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 500;
`;
