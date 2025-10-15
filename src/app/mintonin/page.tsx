import DetailTopInfo from "@/components/detailTopInfo";
import style from "./page.module.css";
import projects from "@/mock/projects.json";

export default function Page() {
  return (
    <div className={style.container}>
      <DetailTopInfo {...projects[1]} />
    </div>
  );
}
