import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarTitle,
  SideBartList,
  SidebarListItem,
  StyledLink,
} from "./sidebar-elements";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SideBartList>
            <StyledLink exact to="/">
              <SidebarListItem>
                <LineStyle style={{ marginRight: "5px", fontSize: 20 }} />
                Home
              </SidebarListItem>
            </StyledLink>
            <StyledLink to="/analytics">
              <SidebarListItem>
                <Timeline style={{ marginRight: "5px", fontSize: 20 }} />
                Analytics
              </SidebarListItem>
            </StyledLink>
            <StyledLink to="/sales">
              <SidebarListItem>
                <TrendingUp style={{ marginRight: "5px", fontSize: 20 }} />
                Sales
              </SidebarListItem>
            </StyledLink>
          </SideBartList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>QuickMenu</SidebarTitle>
          <SideBartList>
            <StyledLink to="/users">
              <SidebarListItem>
                <PermIdentity style={{ marginRight: "5px", fontSize: 20 }} />
                Users
              </SidebarListItem>
            </StyledLink>
            <StyledLink to="/products">
            <SidebarListItem>
              <Storefront style={{ marginRight: "5px", fontSize: 20 }} />
              Products
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/transactions">
            <SidebarListItem>
              <AttachMoney style={{ marginRight: "5px", fontSize: 20 }} />
              Transactions
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/reports">
            <SidebarListItem>
              <BarChart style={{ marginRight: "5px", fontSize: 20 }} />
              Reports
            </SidebarListItem>
            </StyledLink>
          </SideBartList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notifications</SidebarTitle>
          <SideBartList>
          <StyledLink to="/mail">
            <SidebarListItem>
              <MailOutline style={{ marginRight: "5px", fontSize: 20 }} />
              Mail
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/feedback">
            <SidebarListItem>
              <DynamicFeed style={{ marginRight: "5px", fontSize: 20 }} />
              Feedback
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/message">
            <SidebarListItem>
              <ChatBubbleOutline style={{ marginRight: "5px", fontSize: 20 }} />
              Messages
            </SidebarListItem>
            </StyledLink>
          </SideBartList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Staff</SidebarTitle>
          <SideBartList>
          <StyledLink to="/manage">
            <SidebarListItem>
              <WorkOutline style={{ marginRight: "5px", fontSize: 20 }} />
              Manage
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/details">
            <SidebarListItem>
              <Timeline style={{ marginRight: "5px", fontSize: 20 }} />
              Details
            </SidebarListItem>
            </StyledLink>
            <StyledLink to="/report">
            <SidebarListItem>
              <Report style={{ marginRight: "5px", fontSize: 20 }} />
              Reports
            </SidebarListItem>
            </StyledLink>
          </SideBartList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
