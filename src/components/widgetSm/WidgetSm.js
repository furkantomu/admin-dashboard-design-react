import { Visibility } from "@material-ui/icons";
import React from "react";
import {
  WidgetSmallList,
  WidgetSmallListItem,
  WidgetSmallListItemImg,
  WidgetSmallTitle,
  WidgetSmallUsername,
  WidgetSmallUserTitle,
  WidgetSmUser,
  WigdetSmallContainer,
  WitgetSmButton,
} from "./widgetsm-elements";

const WidgetSm = () => {
  return (
    <WigdetSmallContainer>
      <WidgetSmallTitle>New Join Members</WidgetSmallTitle>
      <WidgetSmallList>
        <WidgetSmallListItem>
          <WidgetSmallListItemImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <WidgetSmUser>
            <WidgetSmallUsername>Anna Keller</WidgetSmallUsername>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmUser>
          <WitgetSmButton>
            <Visibility style={{fontSize:16,marginRight:5}}/>
            Display
          </WitgetSmButton>
        </WidgetSmallListItem>
        <WidgetSmallListItem>
          <WidgetSmallListItemImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <WidgetSmUser>
            <WidgetSmallUsername>Anna Keller</WidgetSmallUsername>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmUser>
          <WitgetSmButton>
            <Visibility style={{fontSize:16,marginRight:5}}/>
            Display
          </WitgetSmButton>
        </WidgetSmallListItem> <WidgetSmallListItem>
          <WidgetSmallListItemImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <WidgetSmUser>
            <WidgetSmallUsername>Anna Keller</WidgetSmallUsername>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmUser>
          <WitgetSmButton>
            <Visibility style={{fontSize:16,marginRight:5}}/>
            Display
          </WitgetSmButton>
        </WidgetSmallListItem> <WidgetSmallListItem>
          <WidgetSmallListItemImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <WidgetSmUser>
            <WidgetSmallUsername>Anna Keller</WidgetSmallUsername>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmUser>
          <WitgetSmButton>
            <Visibility style={{fontSize:16,marginRight:5}}/>
            Display
          </WitgetSmButton>
        </WidgetSmallListItem> <WidgetSmallListItem>
          <WidgetSmallListItemImg src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <WidgetSmUser>
            <WidgetSmallUsername>Anna Keller</WidgetSmallUsername>
            <WidgetSmallUserTitle>Software Engineer</WidgetSmallUserTitle>
          </WidgetSmUser>
          <WitgetSmButton>
            <Visibility style={{fontSize:16,marginRight:5}}/>
            Display
          </WitgetSmButton>
        </WidgetSmallListItem>
      </WidgetSmallList>
    </WigdetSmallContainer>
  );
};

export default WidgetSm;
