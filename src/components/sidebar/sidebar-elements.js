import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;
export const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
export const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
export const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;
export const SideBartList = styled.ul`
  list-style: none;
  padding: 5px;
`;

const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    background: #BBBBFA;
    display:block;
    max-width: 250px;
    border-radius: 10px;
  }
`;
export const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;