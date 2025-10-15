import DetailTopInfo from "@/components/detailTopInfo";
import style from "./page.module.css";
import projects from "@/mock/projects.json";
import mintoninData from "@/mock/mintoninData.json";
import DetailContent from "@/components/detailContent";

export default function Page() {
  return (
    <div className={style.container}>
      <DetailTopInfo {...projects[1]} />
      <DetailContent {...mintoninData[0]} />
    </div>
  );
}
