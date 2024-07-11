import styled from "styled-components";
import { Container, InnerContainer, Title } from "../common/Common.style";

export const SkillsInnerContainer = styled(InnerContainer)`
  flex-direction: column;
  align-items: flex-start;
  opacity: ${(props) => (props.isview ? 1 : 0)};
  transition: all 1s linear;
  transform: ${(props) =>
    props.isview ? "translateY(0)" : "translateY(50px)"};
`;

export const SkillBox = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;
`;

export const SkillTitle = styled(Title)``;

export const SkillType = styled.h3`
  font-size: 35px;
  margin-bottom: 20px;
`;
export const SkillList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SkillItem = styled.li`
  border-radius: 15px;
  background-color: ${(props) => props.backColor};
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
