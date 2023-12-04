import style from "./ListItem.module.scss";

interface Props {
  URL: {
    url: string;
  };
  URLTarget: {
    select: {
      name: string;
    };
  };
  Thumbnail: {
    files: {
      file: {
        url: string;
      };
    }[];
  };
  Name: {
    title: {
      plain_text: string;
    }[];
  };
  SubTitle: {
    rich_text: {
      plain_text: string;
    }[];
  };
}

function ListItem(props: Props) {
  const URL = props.URL.url;
  const URLTarget = props.URLTarget.select.name;
  const target = URLTarget === "새 창" ? "_blank" : "_self";

  const thumbnail = props.Thumbnail.files[0]?.file.url;
  const buttonText = props.Name.title[0].plain_text;
  const buttonBold = props.NameBolder?.checkbox;
  const subText = props.SubTitle.rich_text[0]?.plain_text;

  return (
    <a
      className={style.button}
      href={URL}
      target={target}
      rel="noreferrer"
    >
      {
        thumbnail &&
        <img
          className={style.thumbnail}
          src={thumbnail}
          alt="썸네일 이미지"
        />
      }

      <div className={style.text}>
        <span className={style.maintext}>
          {
            buttonBold ? (
              <strong>{buttonText}</strong>
            ) : (
              buttonText
            )
          }
        </span>

        { subText && <span className={style.subtext}>{subText}</span> }
      </div>
    </a>
  );
}

export default ListItem;
