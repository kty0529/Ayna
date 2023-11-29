export const URL = "https://ayna.yoga";
export const EMAIL = "contact@ayna.yoga";
export const SNS = {
  Instagram: "https://www.instagram.com/ayna.yoga/",
  // Daangn: "https://www.daangn.com/kr/groups/2dgeOvoA",
  Somoim: "https://somoim.friendscube.com/g/59fc4e66-6a77-11ee-8b97-0a3943fb38031",
};

export const GOOGLE_FORM = "https://forms.gle/Yd631qdMPsmb27De9";
export const GOOGLE_PT_FORM = "https://forms.gle/k9fyRCVsJNfB5AGaA";

// Buttons
import InstagramImage from "./assets/images/button-instagram.png";
// import DaangnImage from "./assets/images/button-daangn.png";
import SomoimImage from "./assets/images/button-somoim.png";

export const ButtonData = [
  {
    thumbnail: InstagramImage,
    link: SNS.Instagram,
    text: "인스타그램",
    target: "_blank"
  },
  // {
  //   thumbnail: DaangnImage,
  //   link: SNS.Daangn,
  //   text: "당근마켓 동네생활",
  //   target: "_blank"
  // },
  {
    thumbnail: SomoimImage,
    link: SNS.Somoim,
    text: "소모임",
    target: "_blank"
  },
  {
    separator: true,
  },
  {
    link: GOOGLE_FORM,
    text: "<strong>🌻 토요 모닝 요가</strong>",
    subtext: "원데이 클래스 신청하기",
    target: "_blank"
  },
  {
    link: GOOGLE_PT_FORM,
    text: "<strong>🍀 요가 수업 문의</strong>",
    subtext: "1:1 / 소그룹 클래스 신청하기",
    target: "_blank"
  }
]
