import style from "./Home.module.scss";

// Components
import Header from "../../components/Header/Header";

// Icons
// import icoShare from "../../assets/svgs/ico-ios_share.svg";
import icoMail from "../../assets/svgs/ico-mail.svg";

// Images
// import buttonDaangn from "../../assets/images/button-daangn.png";

function Home() {
  return (
    <div className={style.home}>
      <Header />

      <main id="main">
        <div className="description">
          매주 토요일 아침 10시, 요가 수업을 진행하고있어요.
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

      <footer id="footer">
        <span className="copyright">ⓒ AYNAYOGA</span>
        <a
          className="contact"
          href="mailto:yerindo8@gmail.com"
          aria-label="문의하기">
          <img src={icoMail} alt="이메일 아이콘" />
        </a>
      </footer>
    </div>
  );
}

export default Home;
