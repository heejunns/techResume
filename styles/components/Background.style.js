import styled from "styled-components";
import { InnerContainer, Title } from "../common/Common.style";

export const BackgroundInnerContainer = styled(InnerContainer)`
  opacity: ${(props) => (props.isview ? 1 : 0)};
  transition: all 1s linear;
  flex-direction: column;
  align-items: flex-start;
  transform: ${(props) =>
    props.isview ? "translateY(0)" : "translateY(50px)"};
`;

export const BackgroundTitle = styled(Title)``;

export const BackgroundList = styled.ul``;

export const BackgrounItem = styled.li`
  margin: 20px 0;
  .name {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .description {
    font-size: 20px;
  }
`;
