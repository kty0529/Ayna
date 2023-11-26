import style from "./Header.module.scss";

// icons & images
import RYT200 from "../../assets/images/symbol-E-RYT200.png";

function Header() {
  return (
    <header id={style.header}>
      <h1 className={style.title}>아이나 요가</h1>

      <img className={style.ryt} src={RYT200} alt="RYT200" />
    </header>
  )
}

export default Header;
