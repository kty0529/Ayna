import * as config from "../../config";
import style from "./Header.module.scss";

// icons & images
import RYT200 from "../../assets/images/symbol-E-RYT200.png";
import ICOShare from "../../assets/svgs/ico-ios_share.svg";

// actions
function handleCopyLink() {
  const shareInput = document.getElementById("shareInput");

  shareInput.style.display = "block";
  shareInput.select();
  document.execCommand("copy");
  shareInput.style.display = "none";

  alert("링크가 복사되었습니다.");
}

function Header() {
  return (
    <header id={style.header}>
      <div className={style.title}>
        <h1 className={style.text}>아이나 요가</h1>
        <i className={style.emoji}>🧘🏻‍♀️</i>
      </div>

      <img className={style.ryt} src={RYT200} alt="RYT200" />

      <div className={style.share}>
        <button
          type="button"
          aria-label="공유하기"
          onClick={handleCopyLink}
        >
          <img src={ICOShare} alt="공유하기 아이콘" />
        </button>
        <input
          id="shareInput"
          type="text"
          defaultValue={config.URL}
          style={{display: "none"}}
        />
      </div>
    </header>
  )
}

export default Header;
