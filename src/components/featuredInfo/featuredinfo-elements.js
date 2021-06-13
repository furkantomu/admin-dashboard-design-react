import styled from 'styled-components';

export const FeaturedInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
export const FeaturedTitle = styled.span`
  font-size: 1rem;
`;
export const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;
export const FeaturedMoney = styled.span`
  font-size: 1.4rem;
  font-weight: 600;

`;
export const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
export const RateIcon = styled.span`
  margin-left: 1px;
  display: flex;
  color: ${({negative}) => negative ? 'red' : 'green'};
`;
export const FeaturedSubTitle = styled.span`
  font-size: .8rem;
  color:gray;
`;







