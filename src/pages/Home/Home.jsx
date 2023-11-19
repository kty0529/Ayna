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
          <strong>원데이클래스, 소그룹 PT</strong> 요가 수업을 진행하고있어요.
          <br />자세한 내용은 인스타그램을 확인해주세요. 😊
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
