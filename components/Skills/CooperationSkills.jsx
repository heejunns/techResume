import {
  SkillBox,
  SkillItem,
  SkillList,
  SkillType,
} from "../../styles/components/Skills.style";

const CooperationSkills = () => {
  return (
    <SkillBox>
      <SkillType>그 외</SkillType>
      <SkillList>
        <SkillItem backColor="#EF9F5B">git</SkillItem>
        <SkillItem backColor="#EF9F5B">잔디</SkillItem>
        <SkillItem backColor="#EF9F5B">figma</SkillItem>
        <SkillItem backColor="#EF9F5B">notion</SkillItem>
      </SkillList>
    </SkillBox>
  );
};

export default CooperationSkills;
