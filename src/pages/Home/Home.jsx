import * as config from "../../config";
import style from "./Home.module.scss";
import {useQuery} from "react-query";

// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItem from "../../components/ListItem/ListItem";

function Home() {
  const {isLoading, data} = useQuery("buttonData", async () => {
    return await fetch(process.env.REACT_APP_NOTION_API)
      .then(res => res.json())
  });


  let reverseData = [];
  if ( ! isLoading ) {
    console.log(data.results);
    reverseData = [...data.results].reverse();
  }


  return (
    <>
      <Header />

      <main id={style.main}>
        <div className={style.description}>
          <strong>원데이클래스, 소그룹 PT</strong> 요가 수업을 진행하고있어요.
          <br />자세한 내용은 인스타그램을 확인해주세요. 😊
        </div>

        {
          isLoading ? (
            <div>로딩중...</div>
          ) : (
            <ul className={style.lists}>
              {
                reverseData.map((item, index) => {
                  console.log(index, "Display: ", item.properties?.Display?.checbox);
                  console.log(index, "ID: ", item.properties?.ID?.unique_id?.number, item?.properties?.ID?.unique_id?.prefix);
                  console.log(index, "Name: ", item.properties?.Name?.title[0]?.plain_text);
                  console.log(index, "NameBoder: ", item.properties?.NameBolder?.checkbox);
                  console.log(index, "SubTitle: ", item.properties?.SubTitle?.rich_text[0]?.plain_text);
                  console.log(index, "Thumbnail: ", item.properties?.Thumbnail?.files[0]?.name, item.properties?.Thumbnail?.files[0]?.type, item.properties?.Thumbnail?.files[0]?.file?.url);
                  console.log(index, "Type: ", item.properties?.Type?.select?.name);
                  console.log(index, "URL: ", item.properties?.URL?.url);
                  console.log(index, "URLTarget: ", item.properties?.URLTarget?.select?.name);
                })
              }

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
          )
        }
      </main>

      <Footer />
    </>
  );
}

export default Home;
