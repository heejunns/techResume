import { Container } from "../../styles/common/Common.style";
import {
  CarrerInnerContainer,
  CarrerItem,
  CarrerItemBox,
  CarrerTitle,
} from "../../styles/components/Carrer.style";

const carrerData = [
  {
    title: "(주) FEC",
    term: "2023.12 ~ 2024.06.30",
    companyDuty: "프론트엔드 개발자",
    mainBusiness:
      "회사의 유일한 프론트엔드 개발자로서 회사의 모바일 웹 서비스, 웹 사이트, 키오스크, 관리자 페이지의 프론트엔드 부분을 모두 담당해서 개발을 진행하였습니다.",
  },
  {
    title: "엔아이 소프트",
    term: "2023.07 ~ 2023.09",
    companyDuty: "프론트엔드 개발자",
    mainBusiness:
      "주로 si 프로젝트들의 프론트엔드 부분을 담당하였고 기능 개발에 좀 더 집중하여 일을 진행하였습니다.",
  },
];

const Carrer = ({ scroll }) => {
  console.log("hello carrer", scroll);
  return (
    <Container back="linear-gradient(to right, white, #dcdcdc)">
      <CarrerInnerContainer isview={scroll}>
        <CarrerTitle>경력</CarrerTitle>
        <CarrerItemBox>
          {carrerData.map((data) => {
            return (
              <CarrerItem key={data.term}>
                <div>
                  <div className="company-name">
                    {data.title} , {data.companyDuty}
                  </div>
                  <div className="term">{data.term}</div>
                  <div className="main-business">{data.mainBusiness}</div>
                </div>
              </CarrerItem>
            );
          })}
        </CarrerItemBox>
      </CarrerInnerContainer>
    </Container>
  );
};

export default Carrer;
