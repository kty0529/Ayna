import * as config from "../../config";
import style from "./Home.module.scss";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItem from "../../components/ListItem/ListItem";

function Home() {
  return (
    <>
      <Header />

      <main id={style.main}>
        <div className={style.description}>
          <strong>나를 비추는 거울, 아이나 요가</strong>입니다.
          <br />요가를 통해 나의 몸과 마음 상태를 바라보고,
          <br />나를 사랑하는 방법을 배워가요.
        </div>

        <ul className={style.lists}>
          {
            config.ButtonData.map((item, index) => {
              if (item.separator) {
                return (
                  <li key={index} className={style.separator}></li>
                )
              }

              return (
                <li key={index}>
                  <ListItem
                    {...item}
                  />
                </li>
              )
            })
          }
        </ul>
      </main>

      <Footer />
    </>
  );
}

export default Home;
