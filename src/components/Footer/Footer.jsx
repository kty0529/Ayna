import * as config from "../../config";
import style from "./Footer.module.scss";

// icons & images
import { ReactComponent as Mail } from "../../assets/svgs/ico-mail.svg";

function Footer() {
  return (
    <footer id={style.footer}>
      <span className={style.copyright}>ⓒ 아이나 요가</span>
      <span className={style.separator}>|</span>
      <a className={style.contact} href={"mailto:"+config.EMAIL}>
        <Mail />
        비즈니스 문의
      </a>
    </footer>
  )
}

export default Footer;
