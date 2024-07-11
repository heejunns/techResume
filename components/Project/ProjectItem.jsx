import { useRef, useState } from "react";
import {
  Img,
  ImgLeftBtn,
  ImgRightBtn,
  ProjectItemBox,
} from "../../styles/components/Project.style";

const ProjectItem = ({
  data: { title, developPeriod, description, imgSrc, imgSrc2 },
}) => {
  const ref = useRef();
  // useEffect(() => {
  //   ref.current.style.transform = "translateX(-500px)";
  // }, []);
  const [isView, setIsView] = useState("left");
  const onclickLeftBtn = () => {
    ref.current.style.transform = "translateX(0)";
    setIsView("left");
  };
  const onclickRightBtn = () => {
    ref.current.style.transform = "translateX(-500px)";
    setIsView("right");
  };
  return (
    <ProjectItemBox>
      <div className="img-box">
        {isView === "left" ? (
          <ImgRightBtn onClick={onclickRightBtn}>
            <span class="material-symbols-outlined">chevron_right</span>
          </ImgRightBtn>
        ) : (
          <ImgLeftBtn onClick={onclickLeftBtn}>
            <span class="material-symbols-outlined">chevron_left</span>
          </ImgLeftBtn>
        )}

        <div className="img-inner-box" ref={ref}>
          <Img>
            <img src={imgSrc} alt="mobileService" />
          </Img>
          <Img>
            <img src={imgSrc2} alt="mobileService" />
          </Img>
        </div>
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ProjectItemBox>
  );
};

export default ProjectItem;
