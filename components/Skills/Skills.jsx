import { Container, InnerContainer } from "../../styles/common/Common.style";
import {
  SkillTitle,
  SkillsInnerContainer,
} from "../../styles/components/Skills.style";
import BackendSkills from "./BackendSkills";
import CooperationSkills from "./CooperationSkills";
import FrontendSkills from "./FrontendSkills";

const Skills = ({ scroll }) => {
  console.log("hello skills", scroll);
  return (
    <Container>
      <SkillsInnerContainer isview={scroll}>
        <SkillTitle>기술</SkillTitle>
        <FrontendSkills />
        <BackendSkills />
        <CooperationSkills />
      </SkillsInnerContainer>
    </Container>
  );
};

export default Skills;
