import { MyInfoBox, MyInfoItem } from "../../styles/components/Introduce.style";
const myInfoData = [
  {
    name: "mu2252@naver.com",
    url: "mailto:mu2252@naver.com",
    backColor: "#FFF56E",
  },
  { name: "깃허브", url: "https://github.com/heejunns", backColor: "#64A0FF" },
  {
    name: "블로그",
    url: "https://velog.io/@wns2252/posts",
    backColor: "#7AFFCF",
  },
];
const MyInfo = () => {
  return (
    <MyInfoBox>
      {myInfoData.map((data, index) => {
        return (
          <MyInfoItem key={index} backColor={data.backColor}>
            {index === 0 ? (
              <>
                <a href={data.url}>
                  <span className="material-symbols-outlined">mail</span>
                  {data.name}
                </a>
              </>
            ) : (
              <a href={data.url}>{data.name}</a>
            )}
          </MyInfoItem>
        );
      })}
    </MyInfoBox>
  );
};

export default MyInfo;
