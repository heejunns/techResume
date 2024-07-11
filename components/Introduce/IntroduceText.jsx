import {
  IntroduceTextBox,
  IntroduceTextItem,
} from "../../styles/components/Introduce.style";
const introduceTextData = [
  "대학교에서 전자전기공학부를 전공하고 졸업했습니다.",
  "제가 원하는 것을 구현 할 수 있는것에 매력을 느껴 개발자가 되었습니다.",
  "저는 정리하는 것을 좋아합니다. 어떤 일을 함에 앞서서  어떤 요구사항이 있는지, 어떤 점을 고려해야 하는지에 대해서 정리후에 개발하는것을 좋아합니다.",
  "개발 과정에서도 계속 진행 상황, 문제 상황 등을 기록할려고 노력합니다.",
  "좋은 사용자 경험은 서비스의 가치를 높일 수 있다고 생각합니다. 좋은 사용자 경험을 제공하는 방법에 관심이 많습니다.",
];
const IntroduceText = () => {
  return (
    <IntroduceTextBox>
      <h1>안녕하세요 내 맘대로 개발자 정희준 입니다.</h1>
      {introduceTextData.map((text) => {
        return <IntroduceTextItem key={text}>{text}</IntroduceTextItem>;
      })}
    </IntroduceTextBox>
  );
};

export default IntroduceText;
