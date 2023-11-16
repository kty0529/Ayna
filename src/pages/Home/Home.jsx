import style from "./Home.module.scss";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Images
// import buttonDaangn from "../../assets/images/button-daangn.png";

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

        <ul>
          <li>
            <a
              className="button"
              href="https://www.instagram.com/ayna.yoga/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="thumbnail" src="" alt="" />
              <span className="text NanumMyeongjo">TEXT</span>
            </a>
          </li>
          <li>
            <a
              className="button"
              href="https://www.instagram.com/ayna.yoga/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="thumbnail" src="" alt="" />
              <span className="text NanumMyeongjo">TEXT</span>
            </a>
          </li>
          <li className="separator">---</li>
          <li>
            <a
              className="button"
              href="https://www.instagram.com/ayna.yoga/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="thumbnail" src="" alt="" />
              <span className="text NanumMyeongjo">TEXT</span>
            </a>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
