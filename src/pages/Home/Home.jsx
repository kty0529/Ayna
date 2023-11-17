import * as config from "../../config";
import style from "./Home.module.scss";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItem from "../../components/ListItem/ListItem";

// Images
import buttonDaangn from "../../assets/images/button-daangn.png";
import buttonInstagram from "../../assets/images/button-instagram.png";

function Home() {
  return (
    <div id={style.home}>
      <Header />

      <main id={style.main}>
        <div className={style.description}>
          <strong>매주 토요일 아침 10시</strong>, 요가 수업을 진행 하고있어요.
          <br />
          자세한 내용은 인스타그램 하이라이트를 확인해주세요. 😊
        </div>

        <ul className={style.lists}>
          <li>
            <ListItem
              thumbnail={buttonInstagram}
              link={config.SNS.Instagram}
              text="인스타그램"
            />
          </li>
          <li>
            <ListItem
              thumbnail={buttonDaangn}
              link={config.SNS.Daangn}
              text="당근 모임"
            />
          </li>
          <li className={style.separator}></li>
          <li>
            <ListItem
              link={config.GOOGLE_FORM}
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
