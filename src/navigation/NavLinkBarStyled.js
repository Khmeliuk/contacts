import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled(NavLink)`
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;
  margin-top: 10px;

  &.active {
    color: ${(p) => p.theme.colors.secondary};
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 10px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${(p) => p.theme.colors.secondary};
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 10px;
  }
`;

export const MainNav = styled("nav")`
  padding: 10px;
  margin: 0 5px;

  display: flex;
  gap: 15px;
  border-right: solid 2px;
`;
