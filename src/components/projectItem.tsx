import Link from "next/link";
import style from "./projectItem.module.css";
import Image from "next/image";
import { ProjectData } from "../types";

export default function ProjectItem({
  id,
  imageUrl,
  period,
  title,
  content,
  position,
  personnel,
  linkData,
  skill,
  info,
}: ProjectData) {
  return (
    <div className={style.projectItem} id={id.toString()}>
      <div className={style.itemImage}>
        <Image
          src={imageUrl.toString()}
          alt={`${title} 썸네일`}
          width={300}
          height={300}
        />
      </div>

      <div className={style.itemContent}>
        <p className={style.title}>{title}</p>
        <b className={style.content}>{content}</b>
        <p className={style.position}>
          {position}
          <span className={style.personnel}> · 작업자 {personnel}</span>
        </p>
        <p className={style.period}>{period}</p>
        <div className={style.link}>
          {linkData.map((data) => {
            return (
              <Link href={data.url} key={data.text}>
                {data.text}
              </Link>
            );
          })}
        </div>
        <p className={style.info}>{info}</p>
        <div className={style.skill}>
          {skill.map((data) => {
            return <div key={data}>{data}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
