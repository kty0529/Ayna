// import * as config from "../../config";
import style from "./Home.module.scss";
import {useQuery} from "react-query";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItem from "../../components/ListItem/ListItem";

function Home() {
  const {isLoading, data} = useQuery("fetchButtonData", async () => {
    return await fetch(process.env.REACT_APP_NOTION_API)
      .then(res => res.json())
  });


  if ( ! isLoading ) {
    // Order 순서대로 정렬
    data.results = [...data.results].sort((a, b) => {
      return a.properties?.Order?.number - b.properties?.Order?.number;
    });

    // Display가 true인 것만 필터링
    data.results = data.results.filter(item => {
      return item.properties?.Display?.checkbox === true;
    });
  }


  return (
    <>
      <Header />

      <main id={style.main}>
        <div className={style.description}>
          <strong>나를 비추는 거울, 아이나 요가</strong>입니다.
          <br />
          <br />요가를 통해 나의 몸과 마음 상태를 바라보고,
          <br />나를 사랑하는 방법을 배워가요.
        </div>

        {
          isLoading ? (
            <div className={style.loading}>
              버튼을 불러오고 있습니다.
            </div>
          ) : (
            <ul className={style.lists}>
              {
                data.results.map((item, index) => {
                  // Separator인 경우
                  if ( item.properties?.Type?.select?.name === "Separator" ) {
                    return (
                      <li key={index} className={style.separator}></li>
                    )
                  }

                  // Button인 경우
                  return (
                    <li key={index}>
                      <ListItem
                        {...item.properties}
                      />
                    </li>
                  )
                })
              }
            </ul>
          )
        }
      </main>

      <Footer />
    </>
  );
}

export default Home;
