import styled from "styled-components";
import { Container, InnerContainer } from "../common/Common.style";

export const IntroduceInnerContainer = styled(InnerContainer)``;

export const IntroduceTextBox = styled.div`
  /* width: 50%; */
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  & > h1 {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

export const IntroduceTextItem = styled.span`
  font-size: 20px;
  line-height: 30px;
  color: #828282;
`;

export const IntroduceImgBox = styled.div`
  width: 350px;
  height: 350px;
  border: none;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 30%;
  }
`;

export const IntroduceRight = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyInfoBox = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-top: 20px;
  display: flex;
  div:nth-of-type(3) {
    margin-bottom: 0;
  }
`;

export const MyInfoItem = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 25px;
  padding: 10px;
  border-radius: 20px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  background-color: ${(props) => props.backColor};
  & > a {
    font-weight: 600;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      margin-right: 10px;
      font-size: 30px;
    }
  }
`;
