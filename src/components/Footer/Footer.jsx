import style from "./Footer.module.scss";

// icons & images
import icoMail from "../../assets/svgs/ico-mail.svg";

function Footer() {
  return (
    <footer id={style.footer}>
      <span className={style.copyright + " NanumMyeongjo"}>ⓒ AYNAYOGA</span>
      <a
        className={style.contact}
        href="mailto:yerindo8@gmail.com"
        aria-label="문의하기">
        <img src={icoMail} alt="이메일 아이콘" />
      </a>
    </footer>
  )
}

export default Footer;
