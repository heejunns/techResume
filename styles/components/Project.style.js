import styled from "styled-components";
import { InnerContainer, Title } from "../common/Common.style";

export const ProjectInnerContainer = styled(InnerContainer)`
  flex-direction: column;
  align-items: flex-start;
  opacity: ${(props) => (props.isview ? 1 : 0)};
  transition: all 1s linear;
  transform: ${(props) =>
    props.isview ? "translateY(0)" : "translateY(50px)"};
`;

export const ProjectTitle = styled(Title)``;

export const ProjectList = styled.ul``;

export const Img = styled.div`
  img {
    width: 500px;
    height: 250px;
    object-fit: contain;
  }
`;

export const ProjectItemBox = styled.li`
  padding: 10px;
  border-radius: 20px;
  margin: 20px 0;
  width: 100%;
  display: flex;
  .img-box {
    margin-right: 20px;
    position: relative;
    min-width: 500px;
    max-width: 500px;
    overflow: hidden;
  }
  .img-inner-box {
    width: 100%;
    min-width: 500px;
    display: flex;
    transition: all 0.5s linear;
  }
  .project-description {
    h3 {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 20px;
      color: #828282;
      line-height: 25px;
    }
  }
`;

export const ImgBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  z-index: 10;
  position: absolute;
  top: 50%;
  opacity: 0.5;
  span {
    font-size: 50px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const ImgRightBtn = styled(ImgBtn)`
  right: 0;
`;

export const ImgLeftBtn = styled(ImgBtn)`
  left: 0;
`;
