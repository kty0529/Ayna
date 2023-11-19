import style from "./ListItem.module.scss";

interface Props {
  thumbnail?: string;
  link: string;
  text: string;
  target?: string;
}

function ListItem(props: Props) {
  const target = props.target ? props.target : "_self";

  return (
    <a
      className={style.button}
      href={props.link}
      target={target}
      rel="noreferrer"
    >
      {
        props.thumbnail &&
        <img
          className={style.thumbnail}
          src={props.thumbnail}
          alt="썸네일 이미지"
        />
      }

      <span
        className={style.text}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </a>
  );
}

export default ListItem;
