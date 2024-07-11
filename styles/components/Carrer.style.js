import styled from "styled-components";
import { InnerContainer, Title } from "../common/Common.style";

export const CarrerInnerContainer = styled(InnerContainer)`
  flex-direction: column;
  align-items: flex-start;
  opacity: ${(props) => (props.isview ? 1 : 0)};
  transition: all 1s linear;
  transform: ${(props) =>
    props.isview ? "translateY(0)" : "translateY(50px)"};
`;
export const CarrerTitle = styled(Title)`
  margin-bottom: 20px;
`;
export const CarrerItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarrerItem = styled.div`
  margin-bottom: 50px;
  div {
    font-size: 25px;
    line-height: 30px;
  }
  .company-name {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .main-business {
    margin-top: 10px;
  }
`;
