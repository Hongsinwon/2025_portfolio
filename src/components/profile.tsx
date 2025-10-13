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
        <Image src={profile} alt="증명사진" width={150} />
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
        <p className={style.title}>
          💻 일에 있어 가장 중요하게 생각하고 있는것 💻
        </p>
        <p className={style.content}>asdasd</p>
      </div>
    </div>
  );
}
