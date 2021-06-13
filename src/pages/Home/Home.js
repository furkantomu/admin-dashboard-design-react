import React from "react";
import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummydata";
import { HomeContainer } from "./home-elements";

const Home = () => {
  return (
    <HomeContainer>
      <FeaturedInfo />
      <Chart
            data={userData}
            dataKey="Active User"
            grid
            title="User Analiytics"
          />
      <HomeWidgets>
        <WidgetSm />
        <WidgetLg />
      </HomeWidgets>
    </HomeContainer>
  );
};

export default Home;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;
