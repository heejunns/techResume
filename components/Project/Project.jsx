import { Container } from "../../styles/common/Common.style";
import {
  ProjectInnerContainer,
  ProjectList,
  ProjectTitle,
} from "../../styles/components/Project.style";
import ProjectItem from "./ProjectItem";
import mobile from "../../img/mobile.png";
import mobile2 from "../../img/mobile-2.png";
import web from "../../img/web.png";
import web2 from "../../img/web-2.png";
import kiosk from "../../img/kiosk.png";
import kiosk2 from "../../img/kiosk-2.png";
import manager from "../../img/manager.png";
import manager2 from "../../img/manager-2.png";
const projectData = [
  {
    title: "모바일 충전 서비스",
    developPeriod: "2023.12.04 ~ 2024.06.28",
    description:
      "개발중이던 서비스를 인수인계받아 개발을 진행했습니다. 프론트영역 개발을 모두 담당하여 개발을 진행하였고 회사에서 요구하는 사항을 개발하면서 개선해야 할 사항이나 추가되어야 할 기능들을 회의 때 제시하여 개발을 진행하였습니다. 제가 개발을 진행 한 후 추가된 기능은 결제, 현재 충전 실황, 이용약관, 로그인, 로그아웃, 아이디 찾기, 비밀번호 찾기, 내 차량 등록, 내 정보 등 서비스 대부분의 기능들을 추가하거나 개선하였습니다. react, redux-tool-kit, styled-components 로 개발을 진행했고 프론트 서버를 firebase 로 배포하였습니다.",
    imgSrc: mobile,
    imgSrc2: mobile2,
  },
  {
    title: "fec 웹 사이트",
    developPeriod: "2023.12.04 ~ 2024.06.28",
    description:
      "해당 회사의 웹 사이트의 목적은 사용자보다는 투자유치를 위한 웹사이트 입니다. 모든 프론트영역, 디자인 등을 모두 제가 담당하여 개발하였습니다.",
    imgSrc: web,
    imgSrc2: web2,
  },
  {
    title: "fec 충전 키오스크",
    developPeriod: "2023.12.04 ~ 2024.06.28",
    description:
      "주차장에서 충전신청을 할 수 있는 서비스입니다. 기존의 개발중이던 서비스를 받아서 개발을 진행하였으며 화면보호기, 현재 충전중인 충전 상황 모달 등을 추가적으로 개발하였습니다.",
    imgSrc: kiosk,
    imgSrc2: kiosk2,
  },
  {
    title: "fec 충전 관리자 시스템",
    developPeriod: "2023.12.04 ~ 2024.06.28",
    description:
      "충전소 관리자가 직접 충전현황을 볼 수 있고 충전 상황을 제어 할 수 있는 서비스 입니다.",
    imgSrc: manager,
    imgSrc2: manager2,
  },
];
const Project = ({ scroll }) => {
  return (
    <Container>
      <ProjectInnerContainer isview={scroll}>
        <ProjectTitle>프로젝트</ProjectTitle>
        <ProjectList>
          {projectData.map((item, index) => {
            return <ProjectItem data={item} />;
          })}
        </ProjectList>
      </ProjectInnerContainer>
    </Container>
  );
};

export default Project;
