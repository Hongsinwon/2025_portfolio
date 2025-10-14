import style from "./page.module.css";

export default function Page({ params }: { params: { id: string } }) {
  return <div className={style.container}>민턴인</div>;
}
