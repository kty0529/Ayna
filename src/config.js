export const URL = "https://ayna.yoga";
export const EMAIL = "contact@ayna.yoga";
export const SNS = {
  Instagram: "https://www.instagram.com/ayna.yoga/",
  Daangn: "https://www.daangn.com/kr/groups/2dgeOvoA",
};

export const GOOGLE_FORM = "https://forms.gle/Yd631qdMPsmb27De9";

// Images
import InstagramImage from "./assets/images/button-instagram.png";
import DaangnImage from "./assets/images/button-daangn.png";

export const ButtonData = [
  {
    thumbnail: InstagramImage,
    link: SNS.Instagram,
    text: "인스타그램",
    target: "_blank"
  },
  {
    thumbnail: DaangnImage,
    link: SNS.Daangn,
    text: "당근 모임",
    target: "_blank"
  },
  {
    separator: true,
  },
  {
    link: GOOGLE_FORM,
    text: "<strong>🌻 토요 모닝 요가 신청하기</strong>",
    target: "_blank"
  }
]
