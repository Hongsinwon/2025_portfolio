import { DetailContentData } from "@/types";
import { EmblaOptionsType } from "embla-carousel";
import style from "./detailContent.module.css";
import SliderCarousel from "./slidesCarousel/slidesCarousel";

const OPTIONS: EmblaOptionsType = {};

export default function DetailContent({
  id,
  content,
  skill,
  screen,
  contribution,
}: DetailContentData) {
  return (
    <div className={style.detailContent} id={id}>
      <div className={style.content}>
        <p>{content}</p>
      </div>
      <div className={style.skill}>
        <h4>📍 주요 기능 및 특징</h4>
        <ul>
          {skill.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
      </div>
      <div className={style.screen}>
        <h4>💻 작업 화면</h4>
        <SliderCarousel slides={screen} options={OPTIONS} />
      </div>
      <div className={style.contribution}>
        <h4>✨ 작업 기여도</h4>
        {contribution.map((data, index) => {
          const list = data.list;
          return (
            <div className={style.listContent} key={index}>
              <p key={index}>{data.title}</p>
              <ul>
                {list.map((listData, index) => {
                  return <li key={index}>{listData}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
