import { Container } from "../../styles/common/Common.style";
import {
  IntroduceInnerContainer,
  IntroduceRight,
} from "../../styles/components/Introduce.style";
import IntroduceImg from "./IntroduceImg";
import IntroduceText from "./IntroduceText";
import MyInfo from "./MyInfo";

const Introduce = () => {
  return (
    <Container>
      <IntroduceInnerContainer>
        <IntroduceText />
        <IntroduceRight>
          <IntroduceImg />
          <MyInfo />
        </IntroduceRight>
      </IntroduceInnerContainer>
    </Container>
  );
};

export default Introduce;
