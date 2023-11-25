import style from "./Header.module.scss";

// icons & images
import RYT200 from "../../assets/images/symbol-E-RYT200.png";

function Header() {
  return (
    <header id={style.header}>
      <div className={style.title}>
        <h1 className={style.text}>아이나 요가</h1>
        <i className={style.emoji}>🧘🏻‍♀️</i>
      </div>

      <img className={style.ryt} src={RYT200} alt="RYT200" />
    </header>
  )
}

export default Header;
