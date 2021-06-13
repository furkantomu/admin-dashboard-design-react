import React from "react";
import {
  WidgetLgImg,
  WitgetLgName,
  WidgetLgTable,
  WidgetLgth,
  WidgetLgTr,
  WidgetTitle,
  WigdetLargeContainer,
  WidgetLgDate,
  WidgetLgAmount,
  WidgetLgStatus,
  WidgetLgButton,
  WidgetLgUser,
} from "./widgetlg-elements";

const WidgetLg = () => {
  return (
    <WigdetLargeContainer>
      <WidgetTitle>Latest transactions</WidgetTitle>
      <WidgetLgTable>
        <thead>
          <WidgetLgTr>
            <WidgetLgth>Customer</WidgetLgth>
            <WidgetLgth>Date</WidgetLgth>
            <WidgetLgth>Amount</WidgetLgth>
            <WidgetLgth>Sataus</WidgetLgth>
          </WidgetLgTr>
        </thead>
        <tbody>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <WitgetLgName>Susan Carol</WitgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton Declined>Pending</WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        </tbody>
        <tbody>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <WitgetLgName>Susan Carol</WitgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton Pending>Pending</WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        </tbody>
        <tbody>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <WitgetLgName>Susan Carol</WitgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton Pending>Pending</WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        </tbody>
        <tbody>
        <WidgetLgTr>
          <WidgetLgUser>
            <WidgetLgImg src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <WitgetLgName>Susan Carol</WitgetLgName>
          </WidgetLgUser>
          <WidgetLgDate>2 Jun 2021</WidgetLgDate>
          <WidgetLgAmount>$122.00</WidgetLgAmount>
          <WidgetLgStatus>
            <WidgetLgButton Approved>Pending</WidgetLgButton>
          </WidgetLgStatus>
        </WidgetLgTr>
        </tbody>
      </WidgetLgTable>
    </WigdetLargeContainer>
  );
};

export default WidgetLg;
