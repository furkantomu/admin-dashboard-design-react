import React from "react";
import {
  TopbarContainer,
  TopbarWrapper,
  TopLeft,
  TopLeftLogo,
  TopRight,
  TopBarRightIcons,
  TopIconBadge,
  TopAvatar
} from "./topbar-elements";
import { NotificationsNone,Language,Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <TopLeftLogo>Dashboard</TopLeftLogo>
        </TopLeft>
        <TopRight>
          <TopBarRightIcons>
            <NotificationsNone/>
            <TopIconBadge>2</TopIconBadge>
          </TopBarRightIcons>
          <TopBarRightIcons>
            <Language/>
            <TopIconBadge>2</TopIconBadge>
          </TopBarRightIcons>
          <TopBarRightIcons>
            <Settings/>
          </TopBarRightIcons>
          <TopAvatar src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        </TopRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
