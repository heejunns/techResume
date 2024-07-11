import {
  SkillBox,
  SkillItem,
  SkillList,
  SkillType,
} from "../../styles/components/Skills.style";

const BackendSkills = () => {
  return (
    <SkillBox>
      <SkillType>백엔드</SkillType>
      <SkillList>
        <SkillItem backColor="#B4B4DC">firebase</SkillItem>
      </SkillList>
    </SkillBox>
  );
};

export default BackendSkills;
