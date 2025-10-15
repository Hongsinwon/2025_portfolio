import style from "./detailRenewal.module.css";
import listStyle from "./detailContent.module.css";

export default function DetailRenewal() {
  return (
    <div className={style.detailRenewal}>
      <div>
        <h4>✨ 개선사항</h4>
        {/*
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
         */}
      </div>
      <div>
        <h4>💻 리뉴얼 시안</h4>
        <p>1</p>
      </div>
      <div>
        <h4>☕️ 회고</h4>
        <p>1</p>
      </div>
    </div>
  );
}
