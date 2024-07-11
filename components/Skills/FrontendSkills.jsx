import {
  SkillBox,
  SkillItem,
  SkillList,
  SkillType,
} from "../../styles/components/Skills.style";

const frontendSkillData = [
  "html",
  "css",
  "scss",
  "styled-components",
  "javascript",
  "typescript",
  "react",
  "redux",
  "redux-tool-kit",
  "recoil",
  "react-query",
  "webpack",
  "vite",
];

const FrontendSkills = () => {
  return (
    <SkillBox>
      <SkillType>프론트엔드</SkillType>
      <SkillList>
        {frontendSkillData.map((item) => {
          return (
            <SkillItem backColor="#89FB89" key={item}>
              {item}
            </SkillItem>
          );
        })}
      </SkillList>
    </SkillBox>
  );
};

export default FrontendSkills;
