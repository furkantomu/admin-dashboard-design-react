import styled from 'styled-components';


export const WigdetSmallContainer = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;
export const WidgetSmallTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
export const WidgetSmallList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const WidgetSmallListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:20px 0px;
`;
export const WidgetSmallListItemImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export const WidgetSmUser = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WidgetSmallUsername = styled.span`
  font-weight: 600;
`;
export const WidgetSmallUserTitle = styled.span`
  font-weight: 300;
`;
export const WitgetSmButton = styled.button`
  display:flex;
  align-items: center;
  border:none;
  border-radius: 10px;
  padding: 7px 10px;
  background: #eeeef7;
  cursor: pointer;
`;

