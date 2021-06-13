import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {
  FeaturedInfoContainer,
  FeaturedItem,
  FeaturedMoney,
  FeaturedMoneyContainer,
  FeaturedMoneyRate,
  FeaturedSubTitle,
  FeaturedTitle,
  RateIcon
} from "./featuredinfo-elements";

const FeaturedInfo = () => {
  return (
    <FeaturedInfoContainer>
      <FeaturedItem>
        <FeaturedTitle>Revanue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4 <RateIcon negative><ArrowDownward style={{fontSize:17}}/></RateIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4 <RateIcon negative><ArrowDownward style={{fontSize:17}}/></RateIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,255</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4 <RateIcon><ArrowUpward style={{fontSize:17}}/></RateIcon>
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSubTitle>Compared to last month</FeaturedSubTitle>
      </FeaturedItem>
    </FeaturedInfoContainer>
  );
};

export default FeaturedInfo;
