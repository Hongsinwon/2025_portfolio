import DetailTopInfo from "@/components/detailTopInfo";
import style from "./page.module.css";
import projects from "@/mock/projects.json";
import onooffData from "@/mock/onooffData.json";
import DetailContent from "@/components/detailContent";

export default function Page() {
  return (
    <div className={style.container}>
      <DetailTopInfo {...projects[0]} />
    </div>
  );
}

{
  /*
     
      <DetailContent {...onooffData[0]} /> */
}
