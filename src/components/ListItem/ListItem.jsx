import style from "./ListItem.module.scss";

interface Props {
  thumbnail: string;
  link: string;
  text: string;
  className?: string;
}

function ListItem(props: Props) {
  console.log(props);

  const className = props.className ? " " + props.className : "";

  return (
    <a
      className={style.button + className}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={style.thumbnail}
        src={props.thumbnail}
        alt="썸네일 이미지"
      />

      <span
        className={style.text + " NanumMyeongjo"}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </a>
  );
}

export default ListItem;
