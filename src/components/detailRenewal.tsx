import style from "./detailRenewal.module.css";
import listStyle from "./detailContent.module.css";
import { RenewalList } from "@/types";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailsCarousel from "./thumbnailsCarousel";

const OPTIONS: EmblaOptionsType = {};

export default function DetailRenewal({
  renewalList,
  proposal,
  draft,
  recall,
}: RenewalList) {
  return (
    <div className={style.detailRenewal}>
      <div>
        <h4>✨ 개선사항</h4>
        {renewalList.map((data, index) => {
          const list = data.list;
          return (
            <div className={listStyle.listContent} key={index}>
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
      <div>
        <h4>📑 리뉴얼 기획서</h4>
        <ThumbnailsCarousel slides={proposal} options={OPTIONS} />
      </div>
      <div>
        <h4>🎨 리뉴얼 시안</h4>
        <p>1</p>
      </div>
      <div>
        <h4>☕️ 회고</h4>
        <p>{recall}</p>
      </div>
    </div>
  );
}
