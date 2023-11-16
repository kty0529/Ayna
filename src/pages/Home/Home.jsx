import style from "./Home.module.scss";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItem from "../../components/ListItem/ListItem";

// Images
import buttonDaangn from "../../assets/images/button-daangn.png";
import buttonInstagram from "../../assets/images/button-instagram.png";
import buttonKakaoTalk from "../../assets/images/button-kakaotalk.png";
import buttonRequest from "../../assets/images/button-request.png";

function Home() {
  return (
    <div id={style.home}>
      <Header />

      <main id={style.main}>
        <div className={style.description}>
          <strong>매주 토요일 아침 10시</strong>, 요가 수업을 진행하고있어요.
          <br />
          자세한 내용은 인스타그램 하이라이트를 확인해주세요. 😊
        </div>

        <ul className={style.lists}>
          <li>
            <ListItem
              thumbnail={buttonInstagram}
              link="https://www.instagram.com/ayna.yoga/"
              text="인스타그램"
            />
          </li>
          <li>
            <ListItem
              thumbnail={buttonDaangn}
              link="https://www.daangn.com/kr/groups/2dgeOvoA"
              text="당근 모임"
            />
          </li>
          <li>
            <ListItem
              thumbnail={buttonKakaoTalk}
              link="https://open.kakao.com/o/gl9KOGNf"
              text="카카오톡 오픈채팅방"
            />
          </li>
          <li className={style.separator}></li>
          <li>
            <ListItem
              thumbnail={buttonRequest}
              link="https://forms.gle/Yd631qdMPsmb27De9"
              text="<strong>🌻 토요 모닝 요가 신청하기</strong>"
            />
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
