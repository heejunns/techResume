import { Container } from "../../styles/common/Common.style";
import {
  BackgrounItem,
  BackgroundInnerContainer,
  BackgroundList,
  BackgroundTitle,
} from "../../styles/components/Background.style";

const Background = ({ scroll }) => {
  return (
    <Container>
      <BackgroundInnerContainer isview={scroll}>
        <BackgroundTitle>학력</BackgroundTitle>
        <BackgroundList>
          <BackgrounItem>
            <div className="name">홍익대학교 서울캠퍼스</div>
            <div className="description">전자전기공학부 졸업</div>
          </BackgrounItem>
          <BackgrounItem>
            <div className="name">순천향대학교</div>
            <div className="description">전자공학과 자퇴</div>
          </BackgrounItem>
        </BackgroundList>
      </BackgroundInnerContainer>
    </Container>
  );
};

export default Background;
