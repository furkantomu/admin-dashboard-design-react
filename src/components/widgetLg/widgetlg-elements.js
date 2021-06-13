import styled from "styled-components";

export const WigdetLargeContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;
export const WidgetTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;
export const WidgetLgImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const WidgetLgTr = styled.tr``;
export const WidgetLgth = styled.th`
  text-align: left;
`;
export const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  
  font-weight: 600;
`;
export const WidgetLgDate = styled.td`
  font-weight: 300;
`;
export const WidgetLgAmount = styled.td`
  font-weight: 300;
`;
export const WidgetLgStatus = styled.td``;

export const WidgetLgButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;

  ${({Approved,Declined,Pending}) => {
    switch (true) {
      case Approved :
        return "background-color: #e5faf2; color: #3bb077;";

      case Declined:
        return "background-color: #fff0f1;color: #d95087;";

      case Pending:
        return "background-color: #ebf1fe; color: #2a7ade;";

      default:
        return "norder:none";
    }
  }}
`;
export const WitgetLgName = styled.span``;
