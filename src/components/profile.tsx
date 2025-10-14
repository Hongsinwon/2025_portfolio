import Image from "next/image";
import style from "./profile.module.css";
import profile from "../../public/sinwon.jpeg";
import htmlIcon from "../../public/skill/html5.webp";
import cssIcon from "../../public/skill/css3.webp";
import jsIcon from "../../public/skill/JS.webp";
import reactIcon from "../../public/skill/react.webp";
import nextIcon from "../../public/skill/next.webp";
import typescriptIcon from "../../public/skill/typescript.webp";
import dartIcon from "../../public/skill/dart.webp";
import flutterIcon from "../../public/skill/flutter.webp";
import gitIcon from "../../public/skill/git.png";
import githubIcon from "../../public/skill/github.webp";

export default function Profile() {
  return (
    <div className={style.profileSection}>
      <div className={style.aboutMe}>
        {/*  <h2 className={style.title}>ABOUT ME</h2>*/}
        <Image src={profile} alt="증명사진" width={140} />
        <div className={style.meInfo}>
          <b className={style.title}>홍신원</b>
          <p className={style.content}>Frontend Developer</p>
          {/* <p>
            ghdtlsdnjs12@naver.com
            <br />
            010-4862-9080
          </p>*/}
        </div>
      </div>
      <div className={style.skill}>
        <div className={style.title}>SKILL</div>
        <div className={style.skillIcon}>
          <Image src={htmlIcon} alt="html5" width={30} />
          <Image src={cssIcon} alt="css3" width={30} />
          <Image src={jsIcon} alt="javascript" width={30} />
          <Image src={reactIcon} alt="react" width={30} />
          <Image src={nextIcon} alt="next" width={30} />
          <Image src={typescriptIcon} alt="typescript" width={30} />
          <Image src={dartIcon} alt="dart" width={30} />
          <Image src={flutterIcon} alt="flutter" width={30} />
          <Image src={gitIcon} alt="git" width={30} />
          <Image src={githubIcon} alt="githubIcon" width={30} />
        </div>
      </div>
      <div className={style.introduction}>
        <p className={style.infoTitle}>
          Q. 일에 있어 가장 중요하게 생각하고 있는것
        </p>
        <p className={style.content}>
          업무 중 발생하는 다양한 문제 상황에 대해 적극적으로 의견을 제시하고
          <br />
          협의를 통해 최선의 해결책을 도출하는 것을 중요하게 생각합니다. <br />{" "}
          또한, 논의된 내용을 문서화하여 문제 발생의 원인을 명확히 이해하고,{" "}
          <br />
          이를 기반으로 더 나은 개선 방안을 제시할 수 있도록 <br /> 노력하는
          것이 중요하다 생각합니다.
        </p>
      </div>
    </div>
  );
}
