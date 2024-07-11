import { IntroduceImgBox } from "../../styles/components/Introduce.style";
import introducePhoto from "../../img/photo.jpeg";

const IntroduceImg = () => {
  return (
    <IntroduceImgBox>
      <img src={introducePhoto} alt="myPhoto" />
    </IntroduceImgBox>
  );
};

export default IntroduceImg;
