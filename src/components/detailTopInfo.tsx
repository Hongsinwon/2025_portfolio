import { ProjectData } from "@/types";
import Image from "next/image";
import style from "./detailTopInfo.module.css";
import itemStyle from "./projectItem.module.css";

export default function DetailTopInfo({
  id,
  imageUrl,
  period,
  title,
  content,
  position,
  personnel,
  skill,
}: ProjectData) {
  return (
    <div className={style.detailTopInfo} id={id.toString()}>
      <div className={style.itemContent}>
        <div>
          <p className={itemStyle.title}>{title}</p>
          <b className={itemStyle.content}>{content}</b>
          <p className={itemStyle.position}>
            {position}
            <span className={itemStyle.personnel}> · 작업자 {personnel}</span>
          </p>

          <p className={itemStyle.period}>{period}</p>
        </div>
        <div className={style.skill}>
          {skill.map((data) => {
            return <div key={data}>{data}</div>;
          })}
        </div>
      </div>
      <div className={style.itemImage}>
        <Image
          src={`${imageUrl}`}
          alt={`${title} 썸네일`}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
